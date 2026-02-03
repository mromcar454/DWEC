async function registrarVehiculo() {
  const url = "https://miweb.es/servicios/vehiculos.php";
  
  // Los datos que queremos enviar
  const nuevoCoche = {
    matricula: "1702TGG",
    color: "azul",
    cilindrada: "110CV"
  };

  try {
    const respuesta = await fetch(url, {
      method: "POST", 
      headers: {
        // Avisamos al servidor que le enviamos un JSON
        "Content-Type": "application/json" 
      },
      // El cuerpo debe ser un string, por eso usamos stringify
      body: JSON.stringify(nuevoCoche) 
    });

    if (respuesta.ok) {
      console.log("Vehículo guardado correctamente");
    }

  } catch (error) {
    console.error("Error al guardar:", error);
  }
}