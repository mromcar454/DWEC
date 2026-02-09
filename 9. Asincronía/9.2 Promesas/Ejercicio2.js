// CÓDIGO A MODIFICAR
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

esperar(2000)
    .then(() => {
        console.log("Han pasado 2 segundos");
        return esperar(1000);
    })
    .then(() => {
        console.log("Han pasado 3 segundos en total");
    })
    .catch(err => console.error(err));