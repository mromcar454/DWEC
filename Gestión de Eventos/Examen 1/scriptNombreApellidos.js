document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // EJERCICIO 1: FORMULARIO Y VALIDACIÓN
    // ==========================================
    const nombreInput = document.getElementById('nombreInput');
    const errorNombre = document.getElementById('errorNombre');
    const form = document.getElementById('form-heroe');
    const lista = document.getElementById('lista-heroes');

    // 1. Bloqueo de números
    nombreInput.addEventListener('keydown', (e) => {
        // Regex para detectar números
        if (/[0-9]/.test(e.key)) {
            e.preventDefault();
            errorNombre.style.display = 'inline';
        } else {
            errorNombre.style.display = 'none';
        }
    });

    // 2. Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarga
        if (nombreInput.value.trim() !== "") {
            const li = document.createElement('li');
            li.textContent = nombreInput.value;
            lista.appendChild(li);
            nombreInput.value = ""; // Limpiar
        }
    });

    // ==========================================
    // EJERCICIO 2: MOVIMIENTO (TECLADO)
    // ==========================================
    const heroe = document.getElementById('heroe');
    let posX = 180; // Coordenadas iniciales (iguales al CSS)
    let posY = 130;
    const speed = 10;

    document.addEventListener('keydown', (e) => {
        // Solo actuamos si son flechas
        if (e.key.startsWith('Arrow')) {
            e.preventDefault(); // Evitar scroll de ventana

            switch(e.key) {
                case 'ArrowUp': posY -= speed; break;
                case 'ArrowDown': posY += speed; break;
                case 'ArrowLeft': posX -= speed; break;
                case 'ArrowRight': posX += speed; break;
            }

            // Aplicar movimiento
            heroe.style.top = posY + 'px';
            heroe.style.left = posX + 'px';
        }
    });

    // ==========================================
    // EJERCICIO 3: DRAG AND DROP
    // ==========================================
    const items = document.querySelectorAll('.item');
    const slots = document.querySelectorAll('.slot');

    // A. Configurar Origen (Items)
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            // Guardamos el ID del elemento arrastrado
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    // B. Configurar Destino (Slots)
    slots.forEach(slot => {
        // PERMITIR SOLTAR (Regla de oro: preventDefault en dragover)
        slot.addEventListener('dragover', (e) => {
            e.preventDefault(); 
        });

        // Feedback Visual (Entrar)
        slot.addEventListener('dragenter', (e) => {
            e.preventDefault();
            slot.classList.add('hovered');
        });

        // Feedback Visual (Salir)
        slot.addEventListener('dragleave', (e) => {
            slot.classList.remove('hovered');
        });

        // SOLTAR (DROP)
        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            slot.classList.remove('hovered');

            // Recuperar el ID
            const idData = e.dataTransfer.getData('text/plain');
            const elementoArrastrado = document.getElementById(idData);

            // Lógica: Solo permitimos 1 item por slot (si el slot está vacío)
            if (!slot.hasChildNodes()) {
                slot.appendChild(elementoArrastrado);
            }
        });
    });

    // ==========================================
    // EJERCICIO 4: MENÚ CONTEXTUAL
    // ==========================================
    const menu = document.getElementById('menu-contextual');

    // Detectar clic derecho en items
    items.forEach(item => {
        item.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // 1. Evitar menú nativo
            
            // 2. Posicionar menú custom
            menu.style.display = 'block';
            menu.style.top = `${e.clientY}px`;
            menu.style.left = `${e.clientX}px`;
        });
    });

    // Ocultar menú al hacer clic en cualquier otro lado
    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });
});