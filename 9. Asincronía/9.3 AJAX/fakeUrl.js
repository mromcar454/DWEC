async function pedirDatos() {
  try {
    // La ejecución se pausa aquí hasta que fetch responda
    const respuesta = await fetch("https://fakeurl");
    
    console.log(respuesta.statusText);

  } catch (error) {

    console.log('Error de red: ', error);
  }
}

pedirDatos();