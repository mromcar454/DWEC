let formulario = new FormData();
formulario.append("matricula", "1402LGM");
formulario.append("marca", "Peugeout");
formulario.append("modelo", "206");
formulario.set("modelo", "306");
formulario.delete("marca");

async function enviarVehiculo() {
    try {
        const respuesta = await fetch("https://miweb.es/servicios/nuevovehiculo.php", {
            method: "POST",
            body: formulario
            // No pongas el header Content-Type, fetch lo gestiona automáticamente con FormData
        });
        const data = await respuesta.text();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

enviarVehiculo();
