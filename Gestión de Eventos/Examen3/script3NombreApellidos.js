const items = document.querySelectorAll(".item");
const casillas = document.querySelectorAll(".casilla");
const papelera = document.getElementById("papelera");

let itemArrastrado = null;

items.forEach(item => {

    item.addEventListener("dragstart", (e) => {
        itemArrastrado = item;
        item.classList.add("arrastrando");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("arrastrando");
    });
});

casillas.forEach(casilla => {

    casilla.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    casilla.addEventListener("drop", (e) => {
        e.preventDefault();

        if (!itemArrastrado) return;

        const tipoCasilla = casilla.dataset.tipo;
        const tipoItem = itemArrastrado.dataset.categoria;

        const vacia = casilla.children.length === 0;

        if (vacia && tipoCasilla === tipoItem) {
            casilla.appendChild(itemArrastrado);
        }
    });
});

papelera.addEventListener("dragover", (e) => {
    e.preventDefault();
});

papelera.addEventListener("drop", (e) => {
    e.preventDefault();

    if (itemArrastrado) {
        itemArrastrado.remove();
        itemArrastrado = null;
    }
});