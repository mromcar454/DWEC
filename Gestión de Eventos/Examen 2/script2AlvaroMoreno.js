const dron = document.getElementById('personaje');
const hangar = document.getElementById('mapa')

let posX = 225;
let posY = 225;

const maxTop = 500;
const minLeft = 500;


hangar.addEventListener('keydown', (e)=>{

    if(e.key === 'ArrowUp'){
        e.preventDefault();
        posY -=10;
        dron.style.top = posY +'px';

    }else if(e.key === 'ArrowDown'){
        e.preventDefault();
        posY +=10;
        dron.style.top = posY +'px';

    }else if(e.key === 'ArrowLeft'){
        e.preventDefault();
        posX -=10;
        dron.style.left = posX +'px';

    }else if(e.key === 'ArrowRight'){
        e.preventDefault();
        posX +=10;
        dron.style.left = posX +'px';
    }
});


