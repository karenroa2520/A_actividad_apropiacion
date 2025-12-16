//6. Manejo de errores con Promesas
//Ejercicio:
//Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y reject.



// Función que simula una operación asíncrona que puede tener éxito o fallar.
// Devuelve una Promise que se resuelve o se rechaza según el resultado aleatorio.
function procesoConRiesgo() {
    return new Promise((resolve, reject) => {
        // Informa que el proceso ha comenzado.
        console.log("Iniciando proceso que puede fallar...");
        
        // Simula una operación con retraso de 1 segundo.
        setTimeout(() => {
            // Genera un número aleatorio: si es mayor que 0.5, el proceso tiene éxito (50% de probabilidad).
            const exito = Math.random() > 0.5;
            
            if (exito) {
                // Si todo sale bien, la promesa se resuelve con un mensaje de éxito.
                resolve("¡PERFECTO! El proceso terminó correctamente.");
            } else {
                // Si falla, la promesa se rechaza con un objeto de error descriptivo.
                reject(new Error("Fallo: algo salió mal en el proceso."));
            }
        }, 1000);
    });
}

// Ejecuta el proceso y maneja los dos posibles resultados:
// - Si la promesa se resuelve (éxito), imprime el mensaje.
// - Si la promesa se rechaza (fallo), captura el error y muestra su mensaje.
procesoConRiesgo()
    .then(mensaje => console.log(mensaje))           // Caso de éxito
    .catch(error => console.error(error.message));   // Caso de error