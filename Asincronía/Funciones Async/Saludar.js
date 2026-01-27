function saludar (usuario) {
    return `Buenas tardes, ${usuario}.`;
}
async function saludoSincronizado(nombre) {
    let resultado = await saludar(nombre);
    console.log (resultado);
    
}
saludoSincronizado ("Miguel");