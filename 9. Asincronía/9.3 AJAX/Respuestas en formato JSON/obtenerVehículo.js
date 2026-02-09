async function obtenerVehiculo() {
  try {
    // 1. Petición al servidor
    const respuesta = await fetch("https://miweb.es/servicios/vehiculos.php?matricula=1702TGG");
    // 2. Validación manual del estado HTTP
    if (!respuesta.ok) {
      throw new Error("Error en la petición: " + respuesta.status);
    }
    // 3. Convertimos el cuerpo de la respuesta a JSON
    const datos = await respuesta.json();
    // 4. Usamos los datos
    console.log(datos);
  } catch (error) {
    // 5. Capturamos errores de red o el error lanzado manualmente arriba
    console.log(error);
  }
}
// Ejecutamos la función
obtenerVehiculo();
