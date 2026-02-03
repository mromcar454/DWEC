let datosFormulario = document.querySelector("form");

datosFormulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    let formulario = new FormData(datosFormulario);

    // Si usas FormData, NO debes poner manualmente el header:
    // headers: { 'Content-Type': 'multipart/form-data' }
    // El navegador lo añade automáticamente con el boundary correcto.
    // Si lo pones tú, la petición puede fallar.

    
    try {
        const respuesta = await fetch(datosFormulario.getAttribute("action"), {
            method: "POST",
            // body: formulario
            body: formulario
        });
        const data = await respuesta.text();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
});
