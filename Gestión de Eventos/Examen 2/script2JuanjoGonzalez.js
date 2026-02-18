const dron=document.getElementById("personaje")
        const hangar=document.getElementById("mapa")
        y=225
        x=225
       // dron.style.top=y+"px"
       // dron.style.left=x+"px"
        velocidad=10
        velocidadAcelerada=50

        document.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowUp"){
                
                if(e.shiftKey){
                    y=y-velocidadAcelerada
                }else{
                    y=y-velocidad
                }
            }else if(e.key==="ArrowDown"){
                if(e.shiftKey){
                    y=y+velocidadAcelerada
                }else{
                    y=y+velocidad
                }
            }else if(e.key==="ArrowLeft"){
                if(e.shiftKey){
                    x=x-velocidadAcelerada
                }else{
                    x=x-velocidad
                }
            }else if(e.key==="ArrowRight"){
                if(e.shiftKey){
                    x=x+velocidadAcelerada
                }else{
                    x=x+velocidad
                }
            }

            if(y<450 && y>0 ){
                dron.style.top=y+"px"
                dron.style.left=x+"px"
            }

            /*if(x<450 && x>0){
                dron.style.top=y+"px"
                dron.style.left=x+"px"
            }*/
            

        })