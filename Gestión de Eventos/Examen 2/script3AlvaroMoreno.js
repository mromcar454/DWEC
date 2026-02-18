const items = document.querySelectorAll('.item');
const slots = document.querySelectorAll('.slot');
const mochila =document.getElementById('inventario');

items.forEach( item => {
    item.addEventListener('dragstar',(e)=>{
        e.dataTransfer.setData("text/plain", e.target.id);
    });

});

slots.forEach(slot => {
   slot.addEventListener('dragover',(e)=>{
       e.preventDefault();
   });


   slot.addEventListener('drop',(e)=>{

       const idItem = e.dataTransfer.getData("text/plain");

       const nuevoItem = document.getElementById(idItem);

       if(slot.value !== "" && slot.type.value === items.type.value){
           slots.appendChild(nuevoItem);
       }
   });

});


mochila.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

mochila.addEventListener('drop',(e)=>{
    const idItem = e.dataTransfer.getData("text/plain");

    const nuevoItem = document.getElementById(idItem);

    e.currentTarget.appendChild(nuevoItem);
});