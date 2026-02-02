

//1
const formu = document.getElementById("form-heroe");
 const nombre = document.getElementById("nombreInput");
 const error = document.getElementById("errorNombre");
 const lista = document.getElementById("lista-heroes")

 nombre.addEventListener("keydown",(e)=>{
    if(e.key == 0 || e.key ==1 || e.key==2 || e.key==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key==8 || e.key==9 ){
        e.preventDefault();
       error.style.display="flex";
    }else{
        error.style.display="none";
    }
    
 })

 formu.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(nombre.value){
        const li = document.createElement("li");
        li.innerText = nombre.value;
        lista.appendChild(li);
        nombre.value="";
    }

 })
// 2
 const zona = document.getElementById("zona-juego");
 const heroe = document.getElementById("heroe");
 let paso = 10;
    let posX = 130;
    let posY = 180;
 document.addEventListener("keydown",(e)=>{
    if(e.key == "ArrowUp"){
        posX-= paso;
    }
    else if(e.key == "ArrowDown"){
        posX += paso;
    }
    else if(e.key == "ArrowLeft"){
        posY-= paso;
    }
    else if(e.key == "ArrowRight"){
        posY += paso;
    }

    heroe.style.top = posX +"px";
    heroe.style.left = posY +"px";

 })

// 3
const items = document.querySelectorAll(".item");
const mochila = document.getElementById("origen");
const destino = document.getElementById("destino");


items.forEach(item=>{
    item.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text/plain",e.currentTarget.id);
        e.dataTransfer.effectAllowed="move";
    })
})

mochila.addEventListener("dragover",(e)=>{
    e.preventDefault();
    e.dataTransfer.dropEffect="move";
})
mochila.addEventListener("drop",(e)=>{
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain");
    const elementoItem = document.getElementById(itemId);
    if(elementoItem){
        mochila.appendChild(elementoItem);
    }
})

destino.addEventListener("dragover",(e)=>{
    e.preventDefault();
    e.dataTransfer.dropEffect="move";
})



destino.addEventListener("drop",(e)=>{
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain");
    const elementoItem = document.getElementById(itemId);
    if(elementoItem){
        if(e.target.innerHTML==""){
             e.target.appendChild(elementoItem);
        }     
       
    }
})



// 4
const menu = document.getElementById("menu-contextual");
const info = document.getElementById("opcion-info");
const borrar = document.getElementById("opcion-borrar");

let itemRecibido = "";
let itemId = "";
items.forEach(item=>{
    item.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        menu.style.display ="flex";
        menu.style.top = e.clientY +"px";
        menu.style.left= e.clientX +"px";
        itemRecibido = item.innerText;
        itemId=item.id;
    })
})
info.addEventListener("click", (e)=>{
    alert("Info: "+itemRecibido);
})

borrar.addEventListener("click",(e)=>{
    items.forEach(item=>{
        if(itemId==item.id){
            item.remove();
        }
    })
})
document.addEventListener("click",(e)=>{
    menu.style.display ="none";
})