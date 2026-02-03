let promesa = new Promise(function (exito, fracaso) {
    exito("Promesa resuelta con éxito");
});

promesa
.then(function mensaje1() {
    console.log("Mensaje 1: La promesa se ha resuelto.");
})
.then(function mensaje2() {
    console.log("Mensaje 2: Continuamos con la cadena de promesas.");
})
.then(function mensaje3() {
    console.log("Mensaje 3: Último mensaje en la cadena de promesas.");
}
);

// --- Con async/await ---
async function ejemploAsyncAwait() {

    await promesa;
    console.log("Mensaje 1: La promesa se ha resuelto.");

    // Simulamos el encadenamiento ejecutando las siguientes instrucciones en orden
    console.log("Mensaje 2: Continuamos con la cadena de promesas.");
    console.log("Mensaje 3: Último mensaje en la cadena de promesas.");
}

ejemploAsyncAwait();