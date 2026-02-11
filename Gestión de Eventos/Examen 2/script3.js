const items = document.querySelectorAll('.item');
const slots = document.querySelectorAll('.slot');
const basura = document.getElementById('basura');

// 1. Configurar arrastrables
items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        // Guardamos el tipo de ítem (arma o casco)
        e.dataTransfer.setData('tipo', item.dataset.tipo);
    });
});

// 2. Configurar Slots (Zona de equipamiento)
slots.forEach(slot => {
    slot.addEventListener('dragover', (e) => e.preventDefault()); // Permitir soltar

    slot.addEventListener('drop', (e) => {
        e.preventDefault();
        
        const id = e.dataTransfer.getData('text/plain');
        const tipoItem = e.dataTransfer.getData('tipo');
        const tipoSlot = slot.dataset.acepta; // Qué acepta este hueco

        const itemElement = document.getElementById(id);

        // CONDICIÓN: El slot debe estar vacío Y los tipos deben coincidir
        if (slot.children.length === 0 && tipoItem === tipoSlot) {
            slot.appendChild(itemElement);
            // Limpiamos estilos o texto si fuera necesario
            slot.style.borderStyle = "solid"; 
        } else {
            // Opcional: Feedback visual de error
            console.log("No puedes poner eso aquí");
        }
    });
});

// 3. Configurar Papelera
basura.addEventListener('dragover', (e) => e.preventDefault());

basura.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const item = document.getElementById(id);
    
    if (item) {
        item.remove(); // Eliminar del DOM
    }
});