//Ejercicio 1

let miFormulario = document.getElementById("form-heroe")
let miCampoTexto = document.getElementById("nombreInput")
let miSpan = document.getElementById("errorNombre")
let miLista = document.getElementById("lista-heroes")

miCampoTexto.addEventListener("keydown", (event) => {

    if (event.key == 0 || event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9) {

        event.preventDefault()
        miSpan.style.display = "contents"

    } else {

        miSpan.style.display = "none"
    }

})

miFormulario.addEventListener("submit", (event) => {

    event.preventDefault()

    if (miCampoTexto.value != "") {

        let miLi = document.createElement("li")
        miLi.textContent = miCampoTexto.value
        miLista.appendChild(miLi)

        miCampoTexto.value = " "

    }

})

//Ejercicio 2

let miHeroe = document.getElementById("heroe")

let aumento = 10

let coordenadaX = 100
let coordenadaY = 100

miHeroe.style.top = coordenadaX + "px"
miHeroe.style.left = coordenadaY + "px"


document.addEventListener("keydown", (event) => {

    if (event.key == "ArrowRight") {
        event.preventDefault()
        coordenadaX += aumento
        miHeroe.style.left = coordenadaX + "px"
    }

    if (event.key == "ArrowLeft") {
        event.preventDefault()
        coordenadaX -= aumento
        miHeroe.style.left = coordenadaX + "px"
    }

    if (event.key == "ArrowUp") {
        event.preventDefault()
        coordenadaY -= aumento
        miHeroe.style.top = coordenadaY + "px"
    }

    if (event.key == "ArrowDown") {
        event.preventDefault()
        coordenadaY += aumento
        miHeroe.style.top = coordenadaY + "px"
    }

})

//Ejercicio 4

let misItems = document.querySelectorAll(".item")
let miMenu = document.getElementById("menu-contextual")

misItems.forEach(element =>  {

    element.addEventListener("context-menu", (event) => {

        event.preventDefault()

        miMenu.style.display = "contents"
    })
    
});