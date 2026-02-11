const formHeroe = document.getElementById('form-heroe');
const nombre = document.getElementById('nombreInput');
const bola = document.getElementById('heroe');
const zona = document.getElementById('zona-juego');
const mochila = document.getElementById('origen');
const destiny = document.getElementById('destino');
const slot = document.getElementsByClassName('slot');
const errores = document.getElementById('errorNombre');
const menuContextual = document.getElementById('menu-contextual');
const items = document.querySelectorAll('item');
const lista = document.getElementById('lista-heroes')

nombre.addEventListener('keydown', (e)=>{
    if(!e.DOM_KEY_LOCATION_NUMPAD){
        errores.style.display = "none"
    }else{
        e.preventDefault();
        errores.style.display = "block";
    }
});

formHeroe.addEventListener('submit', (e)=>{
    if(e.value !== ""){
        lista.innerHTML = '<li> ${nombre.value} </li>'
    }
});


