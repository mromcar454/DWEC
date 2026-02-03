let accionAsincrona = () => {
    return new Promise((exito) => {
        setTimeout(() => exito("Promesa cumplida con éxito"), 5000);
    });
};

let muestraMensaje = async () => {
    console.log(await accionAsincrona());
};

console.log("Antes de ejecutar accionAsincrona");
muestraMensaje();
console.log("Después de ejecutar accionAsincrona");



