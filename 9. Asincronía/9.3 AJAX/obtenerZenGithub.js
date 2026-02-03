

async function obtenerZenGitHub() {
  try {
    // 1. Esperamos a que la petición fetch se complete
    const res = await fetch('https://api.github.com/zen');

    // 2. Leemos la cabecera (esto es síncrono una vez tenemos la respuesta)
    console.log('CORS permitido desde:', res.headers.get('Access-Control-Allow-Origin'));

    // 3. Esperamos a que se extraiga el texto del cuerpo de la respuesta
    const data = await res.text();

    // 4. Mostramos el mensaje
    console.log('Mensaje Zen de GitHub:', data);

  } catch (error) {
    console.error('Hubo un problema con la petición:', error);
  }
}

obtenerZenGitHub();