// Seleccionamos los elementos
const inputClave = document.getElementById('campo-clave');
const btnEnviar = document.getElementById('btn-enviar');

// 1. Bloqueo de VOCALES (Evento keydown)
inputClave.addEventListener('keydown', (e) => {
    // Expresión regular que busca vocales (mayus o minus)
    const esVocal = /[aeiouáéíóú]/i.test(e.key);
    
    if (esVocal) {
        e.preventDefault(); // Detiene la escritura
    }
});

// 2. Mayúsculas y Estado del Botón (Evento input)
inputClave.addEventListener('input', () => {
    // Transformar a mayúsculas inmediatamente
    inputClave.value = inputClave.value.toUpperCase();

    // Validar longitud para habilitar/deshabilitar botón
    if (inputClave.value.length >= 6) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
});