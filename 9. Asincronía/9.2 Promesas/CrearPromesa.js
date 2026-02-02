function verificarTexto(textoPrincipal, textoBusqueda) {
    return new Promise((resolve, reject) => {
        // Simulamos una tarea
        if (textoPrincipal.includes(textoBusqueda)) {
            // Caso de ÉXITO: Devolvemos un mensaje positivo
            resolve(`¡Encontrado! "${textoBusqueda}" está dentro.`);
        } else {
            // Caso de ERROR: Devolvemos un motivo de fallo
            reject(`Error: "${textoBusqueda}" no aparece.`);
        }
    });
}
