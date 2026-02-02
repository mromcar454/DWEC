// EJ 1
let formularioHeroe = document.getElementById('form-heroe');
let spanError = document.getElementById('errorNombre');
let nombreInput = document.getElementById('nombreInput');
let listaHeroes = document.getElementById('lista-heroes');

formularioHeroe.addEventListener('keydown', (e) => {
    if ("0123456789".includes(e.key)) {
        e.preventDefault();
        spanError.style.display = 'block';
    } else {
        spanError.style.display = 'none';
    }
})

formularioHeroe.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nombreInput.value.length >= 1) {
        let lista = document.createElement('li');
        lista.textContent = nombreInput.value;
        listaHeroes.appendChild(lista);
    }
    nombreInput.value = '';
})

// EJ 2
let heroe = document.getElementById('heroe');

let ejeX = 130;
let ejeY = 180;
const speed = 10;

document.addEventListener('scroll', (e) => {
    e.preventDefault();
})

heroe.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.key === 'ArrowUp') {
        ejeX = ejeX - speed;
        e.target.style.top = ejeX+'px';
    }
    if (e.key === 'ArrowDown') {
        ejeX = ejeX + speed;
        e.target.style.top = ejeX+'px';
    }
    if (e.key === 'ArrowLeft') {
        ejeY = ejeY - speed;
        e.target.style.left = ejeY+'px';
    }
    if (e.key === 'ArrowRight') {
        ejeY = ejeY + speed;
        e.target.style.left = ejeY+'px';
    }
})

// EJ 3
let itemEspada = document.getElementById('item1');
let itemEscudo = document.getElementById('item2');
let itemPocion = document.getElementById('item3');

let mochilaOrigen = document.getElementById('origen');
let slots = document.getElementsByClassName('slot');



let elementoArrastrado = null;

itemEspada.addEventListener('dragstart', (e) => {
    elementoArrastrado = itemEspada;
})

itemEscudo.addEventListener('dragstart', (e) => {
    elementoArrastrado = itemEscudo;
})

itemPocion.addEventListener('dragstart', (e) => {
    elementoArrastrado = itemPocion;
})



mochilaOrigen.addEventListener('dragover', (e) => {
    e.preventDefault();

})
mochilaOrigen.addEventListener('drop', (e) => {
    e.preventDefault();
    mochilaOrigen.appendChild(elementoArrastrado);
})

for (let slot of slots) {
    slot.addEventListener('dragover', (e) => {
        e.preventDefault();

    })
    slot.addEventListener('drop', (e) => {
        e.preventDefault();
        if (slot.children.length <= 0) {
            elementoArrastrado.style.background = 'purple';
            slot.appendChild(elementoArrastrado);
        }
    })
}


// EJ 4
let menuContextual = document.getElementById('menu-contextual');
let opcionInfo = document.getElementById('opcion-info');
let opcionBorrar = document.getElementById('opcion-borrar');

document.addEventListener('click', () => {
    menuContextual.style.display = 'none';
})

let itemClickeado = null;

itemEspada.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menuContextual.style.display = 'block';
    itemClickeado = itemEspada;
    menuContextual.style.top = e.clientY+'px';
    menuContextual.style.left = e.clientX+'px';

})
itemEscudo.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menuContextual.style.display = 'block';
    itemClickeado = itemEscudo;
    menuContextual.style.top = e.clientY+'px';
    menuContextual.style.left = e.clientX+'px';

})
itemPocion.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menuContextual.style.display = 'block';
    itemClickeado = itemPocion;
    menuContextual.style.top = e.clientY+'px';
    menuContextual.style.left = e.clientX+'px';

})


opcionInfo.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Info: "+itemClickeado.textContent);
    menuContextual.style.display = 'none';
})

opcionBorrar.addEventListener('click', (e) => {
    e.preventDefault();
    itemClickeado.remove();
    menuContextual.style.display = 'none';
})





