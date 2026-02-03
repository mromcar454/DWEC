let pro1 = new Promise((resolve) => {
    resolve("Promesa 1: hecho.");
});

let pro2 = new Promise((resolve) => {
    resolve("Promesa 2: hecho.");
});

let pro3 = new Promise((resolve) => {
    resolve("Promesa 3: hecho.");
});

let pro4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 4: hecho después de 2 segundos.");
    }, 2000);
});

async function ejecutarPromesas() {
    try {
        const resultados = await Promise.all([pro1, pro2, pro3, pro4]);
        resultados.forEach((resultado) => console.log(resultado));
        console.log("Sincronizadas todas las promesas.");
    } catch (error) {
        console.error("Error en alguna promesa:", error);
    }
}

ejecutarPromesas();