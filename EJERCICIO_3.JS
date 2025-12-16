function procesarPedido(callback) {
    console.log("Preparando tu pedido...");
    
    setTimeout(() => {
        console.log("Pedido listo para entregar.");
        callback(); // Ejecutamos el callback cuando termina la operación
    }, 3000);
}

// Uso de la función
procesarPedido(() => {
    console.log("Pedido entregado");
});

console.log("Esperando tu comida...");