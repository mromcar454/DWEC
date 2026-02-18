const menu = document.getElementById('menu-accion');


const btnFuego = document.getElementById('btn-fuego');
const btnVeneno = document.getElementById('btn-veneno');

const enemigo = document.querySelectorAll('.enemigo');

let idEnemigo = null

window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    menu.oncontextmenu = () => false;

    menu.style.display = 'block';
    menu.style.top = e.clientY + 'px';
    menu.style.left = e.clientX + 'px';


});

enemigo.forEach(enemigo=>{
    idEnemigo = enemigo.id;

    btnFuego.addEventListener('click', (e)=>{
        e.preventDefault();

    });

    btnVeneno.addEventListener('click', (e)=>{
        e.preventDefault();
    });
})

window.addEventListener('click', ()=>{
    menu.style.display = 'none';
});


