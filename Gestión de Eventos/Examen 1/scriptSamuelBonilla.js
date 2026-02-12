
//Ejercicio 1
const input = document.getElementById("nombreInput")
const formulario = document.getElementById("form-heroe")
const errore = document.getElementById("errorNombre")
const lista = document.getElementById("lista-heroes")
//formulario.addEventListener("submit", )

input.addEventListener("keydown", (e)=>{

    if(e.key ==="0" ||e.key ==="1" || e.key ==="2" || e.key ==="3" || e.key ==="4" || e.key ==="5" || e.key ==="6" || e.key ==="7" || e.key ==="8" || e.key ==="9" ){
        errore.style.display = "block"
        input.value=""
    } else {
        errore.style.display = "none"
        input.value += e.key
    }
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(input.value!=""){
        const li = document.createElement("li")
        li.textContent = input.value
        lista.appendChild(li)
        input.value=""
    }

})



//Ejercicio 2

const bola = document.getElementById("heroe");
const zona = document.getElementById("zona-juego")
const mov = 10;
let x = 180;
let y = 150;


bola.style.top = y + "px"
bola.style.left = x + "px"

document.addEventListener("keydown",(e)=>{
    
    e.preventDefault()

    if(e.key==="ArrowRight"){
        x+=mov
        bola.style.left = x + "px" 
    }

    if(e.key==="ArrowLeft"){
        x-=mov
        bola.style.left = x + "px" 
    }

    if(e.key==="ArrowUp"){
        y-=mov
        bola.style.top = y + "px" 
    }

    if(e.key==="ArrowDown"){
        y+=mov
        bola.style.top = y + "px" 
    }

})


//Ejercicio 3

const origen = document.getElementById("origen")
const destino = document.getElementById("destino")

const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")

const zona1 = document.getElementsByClassName("slot")[0]
const zona2 = document.getElementsByClassName("slot")[1]
const zona3 = document.getElementsByClassName("slot")[2]

console.log(zona1)


item1.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",item1.id)
})

item2.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",item2.id)
})

item3.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",item3.id)
})

zona1.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

zona2.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

zona3.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

zona1.addEventListener("drop",(e)=>{
    e.preventDefault()
    let id = e.dataTransfer.getData("text")
    let item = document.getElementById(id)
    zona1.appendChild(item)
})

zona2.addEventListener("drop",(e)=>{
    e.preventDefault()
    let id = e.dataTransfer.getData("text")
    let item = document.getElementById(id)
    zona2.appendChild(item)
})

zona3.addEventListener("drop",(e)=>{
    e.preventDefault()
    let id = e.dataTransfer.getData("text")
    let item = document.getElementById(id)
    zona3.appendChild(item)
})

origen.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

origen.addEventListener("drop",(e)=>{
    e.preventDefault()
    let id = e.dataTransfer.getData("text")
    let item = document.getElementById(id)
    origen.appendChild(item)
})



//Ejercicio 4

const menu = document.getElementById("menu-contextual")
const lista1 = document.getElementById("opcion-info")
const lista2 = document.getElementById("opcion-borrar")

item1.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    const posx = e.screenX
    const posy = e.screenY

    menu.style.left = posx + "px"
    menu.style.top = posy + "px"
    menu.style.display = "block"

})

item2.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    const posx = e.screenX
    const posy = e.screenY

    menu.style.left = posx + "px"
    menu.style.top = posy + "px"
    menu.style.display = "block"



})

item3.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    const posx = e.screenX
    const posy = e.screenY

    menu.style.left = posx + "px"
    menu.style.top = posy + "px"
    menu.style.display = "block"



})

document.addEventListener("click",(e)=>{
    if(menu.style.display !== "None"){
        menu.style.display = "None"
    }
})

lista1.addEventListener("click",(e)=>{
    alert("Info españa")
})

lista2.addEventListener("click",(e)=>{



})