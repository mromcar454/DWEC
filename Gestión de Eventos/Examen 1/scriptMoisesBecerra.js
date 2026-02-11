//Ejercicio 1

const formulario = document.getElementById("form-heroe");
const errorSpan = document.getElementById("errorNombre");
const listaHeroes = document.getElementById("lista-heroes");
const nombreInput = document.getElementById("nombreInput");

formulario.addEventListener("keydown", (e) => {
    if(!isNaN(e.key)) {
        e.preventDefault();
        errorSpan.style.display = "flex";
    } else {
        errorSpan.style.display = "none";
    }
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario.elements["nombreInput"].value;
    if (nombre !== "") {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = "nombre";
        listaHeroes.appendChild(elementoLista);
        nombreInput.value = "";
    }
});


//Ejercicio 2

const heroe = document.getElementById("heroe");
const juego = document.getElementById("zona-juego");
let x = 100;
let y = 180;

document.addEventListener("keydown", (e) => {
    
    switch (e.key) {
        case "ArrowUp":
            y -= 10;
            heroe.style.top = y + "px";
            break;
        
        case "ArrowDown":
            y += 10;
            heroe.style.top = y + "px";
            break;
        
        case "ArrowLeft":
            x -= 10;
            heroe.style.left = x + "px";
            break;
        
        case "ArrowRight":
            x += 10;
            heroe.style.left = x + "px";
            break;
        default:
            break;
    }
});


//ejercicio 3
const items = document.querySelectorAll(".item");
const origen = document.getElementById("origen");
const slots = document.querySelectorAll(".slot");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");



items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(item);
    });
});


origen.addEventListener("dragover", (e) => {
    e.preventDefault();
});

origen.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const attr = document.getElementById(id);

    origen.appendChild(attr);
});

slots.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    slot.addEventListener("dragenter", (e) => {
        slot.classList.add("hovered");
    });

    slot.addEventListener("dragleave", (e) => {
        slot.classList.remove("hovered");
    });

    slot.addEventListener("drop", (e) => {
        const id = e.dataTransfer.getData("text/plain");
        const attr = document.getElementById(id);

        if (slot.childElementCount == 0) {
            slot.appendChild(attr);
        }

    });
});

//ejercicio 4

const menu = document.getElementById("menu-contextual");
const info = document.getElementById("opcion-info");
const borrar = document.getElementById("opcion-borrar");

let clicked = false;

items.forEach(item => {
    item.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        menu.style.display = "block";
        menu.style.left = e.clientX + "px";
        menu.style.top = e.clientY + "px";
        clicked = true;
        info.addEventListener("click", (e) => {
            alert(`Info: ${item.textContent}`);
        });
        borrar.addEventListener("click", (e) => {
            document.item.remove;
        });
    });
    document.addEventListener("click", (e) => {
        menu.style.display = "none";
    });
});




