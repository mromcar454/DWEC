let pro1 = new Promise((exito)=>{
exito ("Promesa 1: hecho.")});
let pro2 = new Promise((exito)=>{
exito ("Promesa 2: hecho.")});
let pro3 = new Promise((exito)=>{
exito ("Promesa 3: hecho.")});
let pro4 = new Promise((exito)=>{
setTimeout(() => {exito("Promesa 4: hecho después de 2 segundos.")}, 2000)});

async function resultado () {
    let res1 = await pro1;
    console.log (res1);
    let res2 = await pro2;
    console.log (res2);
    let res3 = await pro3;
    console.log (res3);
    let res4 = await pro4;
    console.log (res4);
    console.log ("Sincronizadas todas las promesas.");
}
resultado();