async function enviarVehiculo() {
    try {
        const respuesta = await fetch("https://miweb.es/servicios/nuevovehiculo.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "matricula=1402LGM&marca=Peugeout&modelo=206"
        });
        const data = await respuesta.text();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

enviarVehiculo();
