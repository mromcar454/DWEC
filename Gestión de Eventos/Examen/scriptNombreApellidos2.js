document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // EJERCICIO 1: FORMULARIO (2.5 Puntos)
    // =====================================================
    const nombreInput = document.getElementById('nombreInput');
    const errorNombre = document.getElementById('errorNombre');
    const form = document.getElementById('form-heroe');
    const lista = document.getElementById('lista-heroes');

    // Validación en tiempo real (Keydown)
    nombreInput.addEventListener('keydown', (e) => {
        // Expresión regular para detectar números
        if (/[0-9]/.test(e.key)) {
            e.preventDefault();
            errorNombre.style.display = 'block';
        } else {
            errorNombre.style.display = 'none';
        }
    });

    // Envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const valor = nombreInput.value.trim();
        
        if (valor !== "") {
            const li = document.createElement('li');
            li.textContent = valor;
            lista.appendChild(li);
            nombreInput.value = ""; // Limpiar
        }
    });


    // =====================================================
    // EJERCICIO 2: MOVIMIENTO (2.5 Puntos)
    // =====================================================
    const heroe = document.getElementById('heroe');
    const zonaJuego = document.getElementById('zona-juego');
    
    // Posición inicial (coincide con CSS)
    let posX = 180; 
    let posY = 130;
    const velocidad = 10;
    const heroeSize = 40; // Tamaño de la bola
    
    // Límites del contenedor (400x300)
    const limiteAncho = 400 - heroeSize; 
    const limiteAlto = 300 - heroeSize;

    document.addEventListener('keydown', (e) => {
        // Filtramos solo teclas de flecha
        if (e.key.startsWith('Arrow')) {
            e.preventDefault(); // Evita el scroll de la página

            switch(e.key) {
                case 'ArrowUp': 
                    if (posY - velocidad >= 0) posY -= velocidad; 
                    break;
                case 'ArrowDown': 
                    if (posY + velocidad <= limiteAlto) posY += velocidad; 
                    break;
                case 'ArrowLeft': 
                    if (posX - velocidad >= 0) posX -= velocidad; 
                    break;
                case 'ArrowRight': 
                    if (posX + velocidad <= limiteAncho) posX += velocidad; 
                    break;
            }

            // Aplicamos las nuevas coordenadas
            heroe.style.top = `${posY}px`;
            heroe.style.left = `${posX}px`;
        }
    });


   // =====================================================
    // EJERCICIO 3: INVENTARIO BIDIRECCIONAL (CORREGIDO)
    // =====================================================
    const items = document.querySelectorAll('.item');
    
    // 1. Configurar elementos para ser arrastrados
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            // Opcional: Cambiar opacidad para efecto visual
            setTimeout(() => e.target.classList.add('invisible'), 0);
        });

        item.addEventListener('dragend', (e) => {
            // Restaurar opacidad al terminar
            e.target.classList.remove('invisible');
        });
    });

    // 2. Configurar Zonas de Aterrizaje (Slots + Mochila)
    const zonasDrop = document.querySelectorAll('.slot, #origen');

    zonasDrop.forEach(zona => {
        // PERMITIR DROP (Obligatorio)
        zona.addEventListener('dragover', (e) => {
            e.preventDefault(); 
        });

        // Feedback Visual (Solo en slots para no ensuciar la mochila)
        zona.addEventListener('dragenter', (e) => {
            e.preventDefault();
            if(zona.classList.contains('slot')) zona.classList.add('hovered');
        });

        zona.addEventListener('dragleave', (e) => {
            if(zona.classList.contains('slot')) zona.classList.remove('hovered');
        });

        // SOLTAR
        zona.addEventListener('drop', (e) => {
            e.preventDefault();
            zona.classList.remove('hovered'); // Limpiar estilo

            const idItem = e.dataTransfer.getData('text/plain');
            const item = document.getElementById(idItem);

            if (item) {
                // LÓGICA DE VALIDACIÓN:
                // Si es la mochila (#origen) -> Acepta siempre (retorno).
                if (zona.id === 'origen') {
                    zona.appendChild(item);
                } 
                // Si es un slot -> Acepta solo si está vacío.
                else if (!zona.hasChildNodes()) {
                    zona.appendChild(item);
                }
            }
        });
    });

    // =====================================================
    // EJERCICIO 4: MENÚ CONTEXTUAL AVANZADO (2 Puntos)
    // =====================================================
    const menu = document.getElementById('menu-contextual');
    const btnInfo = document.getElementById('opcion-info');
    const btnBorrar = document.getElementById('opcion-borrar');

    // Variable de estado para recordar qué ítem se clicó
    let itemObjetivo = null;

    // A. Detectar Click Derecho en los Ítems
    items.forEach(item => {
        item.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Bloquea menú del navegador
            
            // Guardamos referencia al objeto actual
            itemObjetivo = e.target;

            // Mostramos menú en coordenadas
            menu.style.display = 'block';
            menu.style.top = `${e.clientY}px`;
            menu.style.left = `${e.clientX}px`;
        });
    });

    // B. Lógica de las Opciones
    
    // Opción VER INFO
    btnInfo.addEventListener('click', () => {
        if (itemObjetivo) {
            alert(`Info del objeto: ${itemObjetivo.textContent}`);
            menu.style.display = 'none'; // Cerrar menú
        }
    });

    // Opción BORRAR
    btnBorrar.addEventListener('click', () => {
        if (itemObjetivo) {
            // Eliminamos del DOM
            itemObjetivo.remove();
            itemObjetivo = null; // Limpiamos referencia
            menu.style.display = 'none'; // Cerrar menú
        }
    });

    // C. Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        // Si el clic no fue dentro del menú, lo cerramos
        if (!menu.contains(e.target)) {
            menu.style.display = 'none';
        }
    });

});