let promesa = new Promise((exito, fracaso) => {
    let cadena1 = "la casa por el tejado";
    let cadena2 = "casa";
    if (cadena1.includes(cadena2)) {
        exito(`La cadena "${cadena2}" sí se encuentra en la cadena "${cadena1}"`);
    } else {
        fracaso(`La cadena "${cadena2}" no se encuentra en la cadena "${cadena1}"`);
    }
});

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));


let promesaExitosa = Promise.resolve("Finalizada con éxito");
promesaExitosa.then(resultado => console.log(resultado));


let promesaFracasada = Promise.reject("Finalizada sin éxito");
promesaFracasada
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));


let pro1 = new Promise((exito)=>{
exito ("Promesa 1: hecho.")});
let pro2 = new Promise((exito)=>{
exito ("Promesa 2: hecho.")});
let pro3 = new Promise((exito)=>{
exito ("Promesa 3: hecho.")});
let pro4 = new Promise((exito)=>{
setTimeout(() => {exito("Promesa 4: hecho después de 2 segundos.")}, 2000)});

let proTodas = Promise.all([pro1, pro2, pro3, pro4])
    .then((resultados) => {
        resultados.forEach((resultado) => console.log(resultado));
        console.log("Sincronizadas todas las promesas.");
});