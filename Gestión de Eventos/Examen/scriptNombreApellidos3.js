document.addEventListener('DOMContentLoaded', () => {

    // --- EJERCICIO 1: FORMULARIO ---
    const nombreInput = document.getElementById('nombreInput');
    const errorNombre = document.getElementById('errorNombre');
    const form = document.getElementById('form-heroe');
    const lista = document.getElementById('lista-heroes');

    nombreInput.addEventListener('keydown', (e) => {
        if (/[0-9]/.test(e.key)) {
            e.preventDefault();
            errorNombre.style.display = 'block';
        } else {
            errorNombre.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (nombreInput.value.trim() !== "") {
            const li = document.createElement('li');
            li.textContent = nombreInput.value;
            lista.appendChild(li);
            nombreInput.value = "";
        }
    });

    // --- EJERCICIO 2: MOVIMIENTO ---
    const heroe = document.getElementById('heroe');
    let posX = 180, posY = 130;
    const speed = 10;

    document.addEventListener('keydown', (e) => {
        if (e.key.startsWith('Arrow')) {
            e.preventDefault();
            if (e.key === 'ArrowUp') posY -= speed;
            if (e.key === 'ArrowDown') posY += speed;
            if (e.key === 'ArrowLeft') posX -= speed;
            if (e.key === 'ArrowRight') posX += speed;
            
            heroe.style.top = posY + 'px';
            heroe.style.left = posX + 'px';
        }
    });

    // --- EJERCICIO 3: DRAG & DROP BIDIRECCIONAL ---
    const items = document.querySelectorAll('.item');
    
    // Configurar origen
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    // Configurar destinos: Tanto la mochila (#origen) como los slots son zonas válidas
    const zonasDrop = document.querySelectorAll('.slot, #origen');

    zonasDrop.forEach(zona => {
        
        zona.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necesario para permitir drop
        });

        // Feedback visual solo en slots (opcional en mochila)
        zona.addEventListener('dragenter', (e) => {
            e.preventDefault();
            if(zona.classList.contains('slot')) zona.classList.add('hovered');
        });

        zona.addEventListener('dragleave', () => {
            if(zona.classList.contains('slot')) zona.classList.remove('hovered');
        });

        zona.addEventListener('drop', (e) => {
            e.preventDefault();
            zona.classList.remove('hovered');

            const idItem = e.dataTransfer.getData('text/plain');
            const item = document.getElementById(idItem);

            if (!item) return;

            // LÓGICA DE VALIDACIÓN DE ZONA
            
            // CASO A: Zona es Mochila (#origen) -> Siempre acepta (retorno)
            if (zona.id === 'origen') {
                zona.appendChild(item);
            }
            // CASO B: Zona es Slot -> Acepta solo si vacía
            else if (zona.classList.contains('slot')) {
                if (!zona.hasChildNodes()) {
                    zona.appendChild(item);
                }
            }
        });
    });

    // --- EJERCICIO 4: MENÚ CONTEXTUAL AVANZADO ---
    const menu = document.getElementById('menu-contextual');
    const btnInfo = document.getElementById('opcion-info');
    const btnBorrar = document.getElementById('opcion-borrar');
    let itemSeleccionado = null; // Memoria del ítem

    // Abrir menú en items
    items.forEach(item => {
        item.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            itemSeleccionado = e.target; // Guardamos referencia
            
            menu.style.display = 'block';
            menu.style.top = `${e.clientY}px`;
            menu.style.left = `${e.clientX}px`;
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target)) menu.style.display = 'none';
    });

    // Acción Info
    btnInfo.addEventListener('click', () => {
        if (itemSeleccionado) {
            alert(`Info: ${itemSeleccionado.textContent}`);
            menu.style.display = 'none';
        }
    });

    // Acción Borrar
    btnBorrar.addEventListener('click', () => {
        if (itemSeleccionado) {
            itemSeleccionado.remove(); // Borra del DOM
            itemSeleccionado = null;
            menu.style.display = 'none';
        }
    });

});