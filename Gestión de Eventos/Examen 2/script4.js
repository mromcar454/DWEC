const enemigos = document.querySelectorAll('.enemigo');
const menu = document.getElementById('menu-accion');
const btnFuego = document.getElementById('btn-fuego');
const btnVeneno = document.getElementById('btn-veneno');

// Variable para recordar a qué enemigo le hicimos click
let enemigoSeleccionado = null;

// 1. Abrir menú contextual
enemigos.forEach(enemigo => {
    enemigo.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Evitar menú del navegador
        
        enemigoSeleccionado = enemigo; // Guardamos referencia

        // Posicionar y mostrar menú
        menu.style.display = 'block';
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;
    });
});

// 2. Cerrar menú al hacer click fuera
document.addEventListener('click', () => {
    menu.style.display = 'none';
});

// 3. Acción: Bola de Fuego (Borrar inmediato)
btnFuego.addEventListener('click', () => {
    if (enemigoSeleccionado) {
        enemigoSeleccionado.remove();
        enemigoSeleccionado = null; // Limpiar referencia
    }
});

// 4. Acción: Veneno (Retardo de 2s)
btnVeneno.addEventListener('click', () => {
    if (enemigoSeleccionado) {
        // Guardamos una referencia local para el timeout (closure)
        const objetivo = enemigoSeleccionado;
        
        setTimeout(() => {
            objetivo.classList.add('envenenado');
        }, 2000); // 2000ms = 2 segundos
    }
});