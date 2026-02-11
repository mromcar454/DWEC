let formulario = document.getElementById('form-heroe');
let nombre = document.getElementById('nombreInput');
let error = document.getElementById('errorNombre');
let lista = document.getElementById('lista-heroes');

nombre.addEventListener('keydown', (e) => {
   if (e.key === "0" | e.key === "1" | e.key === "2" | e.key === "3" | e.key === "4" | e.key === "5" | e.key === "6" | e.key === "7" | e.key === "8" | e.key === "9") {
       e.preventDefault();
       error.style.display = "flex";
   } else {
       error.style.display = "none";
   }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(nombre.value){
        e.preventDefault();
        let personaje = document.createElement("li");
        personaje.innerText = nombre.value;
        lista.appendChild(personaje);
    }
    nombre.value = "";
});

// ---------------------------------------------------------------------------------------------------------------

let heroe = document.getElementById('heroe');
let zona = document.getElementById('zona-juego');

let posicionX= 180;
let posicionY= 130;
let paso = 10;

document.addEventListener("keydown", (e) => {
   if (e.key == "ArrowUp") {
       posicionY -= paso;
   } else if (e.key == "ArrowDown") {
       posicionY += paso;
   }else if (e.key == "ArrowLeft") {
       posicionX -= paso;
   }else if (e.key == "ArrowRight") {
       posicionX +=paso;
   }

   heroe.style.top = posicionY + "px";
   heroe.style.left = posicionX + "px";
});

// ---------------------------------------------------------------------------------------------------------------

let origen =  document.getElementById("origen");
let destino =  document.getElementById("destino");



origen.addEventListener("dragStart", (e) => {
    if(!e.target.id.contains("item1")) return
    e.dataTransfer.setData("text", e.target.id);

    destino.forEach(zone => {
        zone.ondragover = e => e.preventDefault();

        zone.ondrop = e => {
            let id = e.dataTransfer.getData("text");
            let el = document.getElementById(id);

            if(el && !zone.contains(el)){
                destino.appendChild(el);
            }

        }
    })
})
// ---------------------------------------------------------------------------------------------------------------

let menu = document.getElementById("menu-contextual");
let borrar = document.getElementById("opcion-borrar");
let info = document.getElementById("opcion-info");



document.addEventListener("mousedown", (e) => {
    e.preventDefault();
    menu.style.display = "block";


})



















