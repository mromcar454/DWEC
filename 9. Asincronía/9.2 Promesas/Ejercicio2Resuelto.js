function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
    try {
        await esperar(2000);
        console.log("Han pasado 2 segundos");
        await esperar(1000);
        console.log("Han pasado 3 segundos en total");
    } catch (err) {
        console.error(err);
    }
}

ejecutar();