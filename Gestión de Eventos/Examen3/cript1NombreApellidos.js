const input = document.getElementById("codigo");
const boton = document.getElementById("acceder");

// Bloqueo de caracteres no permitidos
input.addEventListener("keypress", (e) => {
    const char = e.key;

    const esLetra = /^[a-zA-Z]$/.test(char);
    const esNumero = /^[0-9]$/.test(char);

    // impedir símbolos
    if (!esLetra && !esNumero) {
        e.preventDefault();
        return;
    }

    // límite de 10 caracteres
    if (input.value.length >= 10) {
        e.preventDefault();
    }
});

// Conversión a minúsculas y validación
input.addEventListener("input", () => {

    input.value = input.value.toLowerCase();

    const valor = input.value;

    const longitudCorrecta = valor.length === 8;
    const numeros = valor.match(/[0-9]/g);
    const tieneDosNumeros = numeros && numeros.length >= 2;

    boton.disabled = !(longitudCorrecta && tieneDosNumeros);
});