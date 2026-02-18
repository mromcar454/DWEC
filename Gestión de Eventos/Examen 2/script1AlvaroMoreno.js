//ej1

const miInput = document.getElementById('campo-clave');
const miFormulario = document.getElementById('form-seguridad');
const botonSeguridad = document.getElementById('btn-enviar')


miInput.addEventListener('keydown' ,(e)=>{

    if(e.key ==='a' || e.key ==='e' || e.key ==='i' || e.key ==='o' || e.key ==='u'){
        e.preventDefault();

    }

});

miInput.addEventListener('submit',(e)=>{

    if(miInput.value.length > 6){
        e.preventDefault();
        botonSeguridad.disabled = false;
    }else{
        botonSeguridad.disabled = true;
    }
});

