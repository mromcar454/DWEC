        const enemigos=document.querySelectorAll(".enemigo")
        const body=document.body
        const menu=document.getElementById("menu-accion")
        const fuego=document.getElementById("btn-fuego")
        const veneno=document.getElementById("btn-veneno")

        document.addEventListener("click",(e)=>{
            menu.style.display="none"
        })

        enemigos.forEach(enemigo=>{
            enemigo.addEventListener("contextmenu",(e)=>{
                e.preventDefault()
                menu.style.top=e.clientY +"px"
                menu.style.left=e.clientX +"px"

                menu.style.display="flex"
                fuego.addEventListener("click",(e)=>{
                    enemigo.style.display="none"
                    menu.style.display="none"


                })
                veneno.addEventListener("click",(e)=>{
                    setTimeout(() =>enemigo.classList.add("envenenado"),2000 )
                    menu.style.display="none"


                })

                
                
            })
            
        })
        
        
       