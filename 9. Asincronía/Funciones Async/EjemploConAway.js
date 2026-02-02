async function resultado() {
    let pro1 = await new Promise((exito)=>{
        exito ("Promesa 1: hecho.");
    });
    console.log (pro1);
    let pro2 = await new Promise((exito)=>{
        exito ("Promesa 2: hecho.");
    }); 
    console.log (pro2);
    let pro3 = await new Promise((exito)=>{
        exito ("Promesa 3: hecho.");
    });
    console.log (pro3);
    let pro4 = await new Promise((exito)=>{
        setTimeout(() => {exito("Promesa 4: hecho después de 2 segundos.")}, 2000)
    });
    console.log (pro4);
    console.log ("Sincronizadas todas las promesas.");
}
resultado();
