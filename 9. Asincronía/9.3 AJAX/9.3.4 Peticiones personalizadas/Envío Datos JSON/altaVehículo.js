let vehiculo = {
    matricula: "1234ABC",
    marca: "Toyota",
    modelo: "Corolla",
    color: "Azul",
    año: 2020
};

async function enviarVehiculo() {
    try {
        const respuesta = await fetch("https://miweb.es/servicios/nuevovehiculo.php", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(vehiculo)
        });
        const data = await respuesta.text();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

enviarVehiculo();
