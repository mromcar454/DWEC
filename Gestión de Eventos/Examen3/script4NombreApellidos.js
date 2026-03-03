const personajes = document.querySelectorAll(".personaje");
const menu = document.getElementById("menu-contextual");

let objetivoActual = null;

personajes.forEach(personaje => {

    personaje.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        objetivoActual = personaje;

        menu.style.display = "flex";
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    });
});

// Cerrar menú si se hace click fuera
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
        menu.style.display = "none";
    }
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menu.style.display = "none";
    }
});

menu.addEventListener("click", (e) => {

    if (!objetivoActual) return;

    const accion = e.target.dataset.accion;

    if (accion === "congelar") {

        if (!objetivoActual.classList.contains("congelado")) {
            objetivoActual.classList.add("congelado");
        }

    } else if (accion === "explosion") {

        setTimeout(() => {
            objetivoActual.remove();
        }, 1500);
    }

    menu.style.display = "none";
});