// 1. Crear el objeto XMLHttpRequest
const xhr = new XMLHttpRequest();
// 2. Configurar la petición: Método GET y URL del recurso
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// 3. Definir qué hacer cuando cambia el estado de la petición
xhr.onreadystatechange = function() {
    
    // Verificamos dos cosas:
    // readyState === 4: La operación se ha completado.
    // status === 200: La respuesta del servidor fue "OK".
    if (xhr.readyState === 4 && xhr.status === 200) {
        
        // La respuesta llega como texto plano (string), hay que convertirla a JSON
        const datos = JSON.parse(xhr.responseText);
        
        console.log('Datos recibidos:', datos);
        
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        // Gestión de errores (por si la url falla o no existe)
        console.error('Hubo un error al obtener los datos');
    }
};

// 4. Enviar la petición a la red
xhr.send();
