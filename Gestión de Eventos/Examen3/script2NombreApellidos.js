const robot = document.getElementById("robot");
const zona = document.getElementById("zona-exploracion");
const mensaje = document.getElementById("mensaje");
const obstaculos = document.querySelectorAll(".obstaculo");

let posX = 0;
let posY = 0;

document.addEventListener("keydown", (e) => {

    let velocidad = e.altKey ? 5 : 15;

    let nuevaX = posX;
    let nuevaY = posY;

    switch (e.key.toLowerCase()) {
        case "w": nuevaY -= velocidad; break;
        case "s": nuevaY += velocidad; break;
        case "a": nuevaX -= velocidad; break;
        case "d": nuevaX += velocidad; break;
        default: return;
    }

    const limiteX = zona.clientWidth - robot.offsetWidth;
    const limiteY = zona.clientHeight - robot.offsetHeight;

    if (nuevaX < 0 || nuevaY < 0 || nuevaX > limiteX || nuevaY > limiteY) {
        return;
    }

    robot.style.left = nuevaX + "px";
    robot.style.top = nuevaY + "px";

    const robotRect = robot.getBoundingClientRect();

    for (let obstaculo of obstaculos) {
        const obstRect = obstaculo.getBoundingClientRect();

        if (
            robotRect.left < obstRect.right &&
            robotRect.right > obstRect.left &&
            robotRect.top < obstRect.bottom &&
            robotRect.bottom > obstRect.top
        ) {
            mensaje.textContent = "⚠ Obstáculo detectado";
            setTimeout(() => mensaje.textContent = "", 1000);
            return;
        }
    }

    posX = nuevaX;
    posY = nuevaY;
});