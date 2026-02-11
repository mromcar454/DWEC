const dron = document.getElementById('personaje');
const mapa = document.getElementById('mapa');

// Obtenemos posición inicial numérica
let x = 225;
let y = 225;

// Límites (Mapa 500px - Dron 50px = 450px máximo movimiento)
const limiteMax = 450;
const limiteMin = 0;

document.addEventListener('keydown', (e) => {
    // 1. Velocidad (Turbo con Shift)
    const velocidad = e.shiftKey ? 50 : 10;

    // Variables para calcular la "futura" posición
    let nextX = x;
    let nextY = y;

    // 2. Calcular intento de movimiento
    switch(e.key) {
        case 'ArrowUp': nextY -= velocidad; break;
        case 'ArrowDown': nextY += velocidad; break;
        case 'ArrowLeft': nextX -= velocidad; break;
        case 'ArrowRight': nextX += velocidad; break;
        default: return; // Si no es flecha, salimos
    }

    // 3. Comprobar colisiones (Solo movemos si está dentro de los límites)
    if (nextX >= limiteMin && nextX <= limiteMax && 
        nextY >= limiteMin && nextY <= limiteMax) {
        
        // Actualizamos variables de estado
        x = nextX;
        y = nextY;
        
        // Actualizamos el DOM
        dron.style.left = x + 'px';
        dron.style.top = y + 'px';
    }
});