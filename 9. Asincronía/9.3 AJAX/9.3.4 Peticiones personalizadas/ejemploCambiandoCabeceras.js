async function peticionSegura() {
  // 1. Instanciamos el objeto Headers (como en tu teoría)
  let cabecerasSeguras = new Headers();

  // 2. Usamos los métodos para manipularlas
  cabecerasSeguras.append("Authorization", "Bearer token_secreto_123");
  cabecerasSeguras.set("Content-Type", "application/json");

  // Comprobación (método .has)
  if(cabecerasSeguras.has("Authorization")) {
      console.log("Cabecera de autorización añadida correctamente.");
  }

  try {
    const respuesta = await fetch("https://api.miweb.es/privado", {
      method: "GET",
      headers: cabecerasSeguras // Pasamos el objeto Headers creado
    });

    const datos = await respuesta.json();
    console.log("Datos privados:", datos);

  } catch (error) {
    console.error("Acceso denegado o error de red:", error);
  }
}