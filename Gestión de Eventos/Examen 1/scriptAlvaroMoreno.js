//ej1

const campoTexto =document.getElementById("nombreInput");
const mensajeAlerta = document.getElementById("errorNombre");
const  formulario = document.getElementById("form-heroe");
const lista = document.getElementById("lista-heroes");



campoTexto.addEventListener("keydown", (e)=>{
    if (typeof(e.key) === Number){
        e.preventDefault();
        mensajeAlerta.document.addEventListener("keydown", (e)=>{
            alert(mensajeAlerta.innerText);
        });
    }

    mensajeAlerta.removeEventListener("keydown", (e)=>{});

    formulario.addEventListener( "submit", (e)=>{
        e.preventDefault();
        if(campoTexto.value !== ""){
            let elemento = document.createElement("li");
            elemento.textContent = campoTexto.value;
            lista.appendChild(elemento);
            campoTexto.value = "";
        }

    });

});



//ej2

const zonaJuego = document.getElementById("zona-juego");
const heroe = document.getElementById("heroe");


let posX = 0;
let posY = 0;

document.addEventListener("keydown",(e)=>{
    

    if(e.key === "ArrowUp"){
        posY = posY - 5;
        heroe.style.top = posY + "px";

    }else if(e.key === "ArrowDown"){
         posY = posY + 5;
        heroe.style.top = posY + "px";

    }else if(e.key === "ArrowLeft"){
         posX = posX - 5;
        heroe.style.left = posX + "px";

    }else if(e.key === "ArrowRight"){
         posX = posX + 5;
        heroe.style.left = posX + "px";

    }
});

//ej3

const mochila = document.querySelectorAll(".origen");
const equipoActivo = document.querySelectorAll(".destino");
const contenedor = document.querySelectorAll(".slot");

const items = document.querySelectorAll(".item")

mochila.forEach(item =>{
    item.addEventListener("dragable", (e)=>{
        e.dataTrasfer.setData("text", e.target.id);
    });

});

//dragleave, dragover, drop
equipoActivo.forEach(equipo=>{

    equipo.addEventListener("dragleave",  (e)=>{
        e.preventDefault();
        equipo.classList.add("hovered");
    });



    equipo.addEventListener("drop" ,(e)=>{
        e.preventDefault();

        equipo.classList.remove("hovered");

        let elementoId = e.dataTrasfer.getData("text");

        let elementoDragable = document.getElementById(elementoId);

        equipoActivo.appendChild(elementoDragable);

    });

});


const menu = document.getElementById("menu-contextual");

items.addEventListener("click", (e)=>{
    e.preventDefault();
    menu.style.display = "block";

});









