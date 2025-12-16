//3. Manejo de asincronía con Callbacks
//Ejercicio:
//Crear una función llamada procesarPedido que simule un pedido de comida con un setTimeout de
//3 segundos y que reciba un callback para mostrar un mensaje final, por ejemplo: “Pedido
//entregado”.



// Declaramos una función llamada 'procesarPedido' que recibe otra función como parámetro (callback).
// Esta función simula el procesamiento de un pedido con un retraso artificial.
function procesarPedido(callback) {
    // El sistema informa que ha iniciado la preparación del pedido.
    console.log("Preparando tu pedido...");
    
    // El sistema programa una operación asíncrona que se ejecutará después de 3000 ms (3 segundos).
    // Durante esos 3 segundos, el resto del programa puede seguir ejecutándose.
    setTimeout(() => {
        // Una vez pasado el tiempo, el sistema notifica que el pedido está listo.
        console.log("Pedido listo para entregar.");
        // Luego, ejecuta la función que se le pasó como argumento (el callback),
        // lo que permite continuar con la lógica definida por el usuario.
        callback();
    }, 3000);
}

// El sistema llama a 'procesarPedido' y le pasa una función anónima como callback.
// Esta función define qué debe suceder después de que el pedido esté listo.
procesarPedido(() => {
    console.log("Pedido entregado");
});

// Mientras el pedido se está preparando (durante los 3 segundos),
// el sistema continúa y muestra este mensaje inmediatamente.
console.log("Esperando tu comida...");