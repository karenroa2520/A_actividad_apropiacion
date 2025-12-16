function esperarDosSegundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Listo después de 2 segundos");
        }, 2000);
    });
}

async function ejecutarProceso() {
    console.log("Iniciando proceso async/await...");
    

    const resultado = await esperarDosSegundos();
    
    console.log("Resultado recibido:", resultado);
    console.log("Proceso finalizado");
}

// Llamamos a la función
ejecutarProceso();

console.log("Este mensaje aparece INMEDIATAMENTE (sin esperar los 2 segundos)");