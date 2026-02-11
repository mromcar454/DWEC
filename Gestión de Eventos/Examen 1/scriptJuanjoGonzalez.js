const heroe=document.getElementById("form-heroe")
const error=document.getElementById("errorNombre")
const input=document.getElementById("nombreInput")
const listaHeroes=document.getElementById("lista-heroes")



heroe.addEventListener("keydown",(e)=>{
    
    if(isNaN(e.key)){
        error.style.display="none"
        
    }else{
        e.preventDefault()
        error.style.display="flex"
        

    }
})
heroe.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(input.value!=""){
        const heroes=input.value
        console.log(listaHeroes)
        //listaHeroes.appendChild("li")
       //listaHeroes.appendChild(heroes)

        input.value="" 
    }
})


const zonaJuego=document.getElementById("zona-juego")
const heroismo=document.getElementById("heroe")

x= 180
y=130

window.addEventListener("keydown",(e)=>{
   if(e.key.startsWith("Arrow")){
       e.preventDefault()
    if(e.key==="ArrowUp"){
        y=y-5
        heroismo.style.top=y+"px"
    }
    if(e.key==="ArrowDown"){
        y=y+5
        heroismo.style.top=y+"px"
    } 
    if(e.key==="ArrowLeft"){
        x=x-5
        heroismo.style.left=x+"px"
    } 
    if(e.key==="ArrowRight"){
        x=x+5
        heroismo.style.left=x+"px"
    }
    }
    

   
    
    
    
}
)
const menuContextual=document.getElementById("menu-contextual")
const mochilas=document.querySelectorAll(".item")
mochilas.forEach(mochila=>{

        mochila.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text/plain",e.currentTarget.id)

        mochila.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
           //console.log(menuContextual)
            console.log(e.clientX)
           console.log(e.clientY)
            menuContextual.style.display="block"
            menuContextual.style.top=e.clientY
            menuContextual.style.left=e.clientX

           
            menuContextual.addEventListener("click",(e)=>{
                console.log(e.id)



                menuContextual.style.display="none"
            })




        })
    })

    



})

const destinos=document.querySelectorAll(".slot")
destinos.forEach(destino=>{

    destino.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    destino.addEventListener("dragenter",(e)=>{
        destino.classList.add("item:active")
    })
    destino.addEventListener("dragoleave",(e)=>{
        destino.classList.remove("item:active")
    })

    destino.addEventListener("drop",(e)=>{
        e.preventDefault()

        const idArrastrado=e.dataTransfer.getData("text/plain")
        const elemento=document.getElementById(idArrastrado)
        console.log(idArrastrado)
        console.log(elemento)
        destino.appendChild(elemento)
    })

})














