const formularioSeguro=document.getElementById("form-seguridad")

    const campoClave=document.getElementById("campo-clave")

    const boton=document.getElementById("btn-enviar")

campoClave.addEventListener("keydown",(e)=>{
    if(e.key==="a" || e.key==="A"){
        e.preventDefault()
    }else if(e.key==="e"|| e.key==="E"){
        e.preventDefault()
    }else if(e.key==="i"|| e.key==="I"){
        e.preventDefault()
    }else if(e.key==="o"|| e.key==="O"){
        e.preventDefault()
    }else if(e.key==="u"|| e.key==="U"){
        e.preventDefault()
    }
})

campoClave.addEventListener("input",(e)=>{

    e.target.value=e.target.value.toUpperCase()

    if(e.target.value.length<6){
        boton.disabled=true
    }else{
        boton.disabled=false
    }
})
