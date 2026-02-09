async function consultarINE() {
try {


const respuesta = await fetch("https://servicios.ine.es/wstempus/js/ES/OPERACIONES_DISPONIBLES");


console.log(`Código respuesta: ${respuesta.status} = ${respuesta.statusText}`);


} catch (error) {
// Si hay error de red, el flujo salta inmediatamente aquí
console.log(error);
}
}


// Ejecutamos la función
consultarINE();



