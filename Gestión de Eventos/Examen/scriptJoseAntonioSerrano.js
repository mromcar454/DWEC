// EJERCICIO 1
const form = document.getElementById('form-heroe');
const errorNombre = document.getElementById('errorNombre');
const lista_heroes = document.getElementById('lista-heroes');

form.addEventListener('keydown', e => {
    if (e.key >= 0 ) {
        e.preventDefault();
        errorNombre.style.display = 'block';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (form.firstElementChild.children[1].value !== "") {
        let heroe = document.createElement('li');
        heroe.innerHTML = form.firstElementChild.children[1].value;
        lista_heroes.append(heroe);

        form.firstElementChild.children[1].value = "";
    }
})

// EJERCICIO 2
const heroe  = document.getElementById('heroe');

let y = 130;
let x = 180;
let speed = 10;

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' ) {
        e.preventDefault();
        switch (e.key) {
            case 'ArrowUp':
                y -= speed;
                heroe.style.top = `${y}px`;
                break;
            case 'ArrowDown':
                y += speed;
                heroe.style.top = `${y}px`;
                break;
            case 'ArrowLeft':
                x -= speed;
                heroe.style.left = `${x}px`;
                break;
            case 'ArrowRight':
                x += speed;
                heroe.style.left = `${x}px`;
                break;
        }
    }
});

// EJERCICIO 3
const origen = document.getElementById('origen');
const destinos = document.getElementById('destino');

let value = "";

origen.addEventListener('drag', e => {
    e.preventDefault();
    localStorage.setItem('origen', 'Ejemplo');
});

destinos.addEventListener('drop', e => {
    for (destino in destinos.children) {
        console.log(destino);
    }
});

// EJERCICIO 4
const menu = document.getElementById('menu-contextual');
const origen2  = document.getElementById('origen');

for (let item in origen2.childNodes) {
    console.log(origen2.childNodes[item]);
}

document.addEventListener('contextmenu', e => {
    e.preventDefault();
    menu.style.display = 'block';
    menu.style.top = e.clientY + 'px';
    menu.style.left = e.clientX + 'px';
});

document.addEventListener('click', e => {
    menu.style.display = 'none';
});

const info = menu.firstElementChild;

info.addEventListener('click', () => {
    alert("Info: ");
});

const borrar = menu.lastElementChild;

borrar.addEventListener('click', () => {
    alert("Borrar: ");
});