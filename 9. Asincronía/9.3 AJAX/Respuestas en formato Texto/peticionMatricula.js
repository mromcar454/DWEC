async function obtenerMatricula() {
    try {
        const respuesta = await fetch("https://lopegonzalez.es/servicios/vehiculos.php?matricula=1702TGG");
        const textoDevuelto = await respuesta.text();
        console.log(textoDevuelto);
    } catch (error) {
        console.log(error);
    }
}

obtenerMatricula();
