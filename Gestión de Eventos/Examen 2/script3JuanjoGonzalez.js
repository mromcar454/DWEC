        const items=document.querySelectorAll(".item")
        items.forEach(item=>{

            item.addEventListener("dragstart",(e)=>{
                e.dataTransfer.setData("text/plain",e.currentTarget.id)

            })



        }

       
        )
        const slots=document.querySelectorAll(".slot")
        slots.forEach(slot=>{

            slot.addEventListener("dragover",(e)=>{
                e.preventDefault()
            })
            slot.addEventListener("drop",(e)=>{
                e.preventDefault()
                const idRecuperado=e.dataTransfer.getData("text/plain")
                const elemento=document.getElementById(idRecuperado)
                if(elemento){
                    slot.appendChild(elemento)
                }
            })

            
        })

        const basura=document.getElementById("basura")

        basura.addEventListener("dragover",(e)=>{
                e.preventDefault()
            })
        basura.addEventListener("drop",(e)=>{
                e.preventDefault()
                const idRecuperado=e.dataTransfer.getData("text/plain")
                const elemento=document.getElementById(idRecuperado)
                elemento.remove()
        })
        