function procesoConRiesgo() {
    return new Promise((resolve, reject) => {
        console.log("Iniciando proceso que puede fallar...");
        
        // Simulamos un retraso
        setTimeout(() => {
            const exito = Math.random() > 0.5; // 50% de probabilidad
            
            if (exito) {
                resolve("¡PERFECTO! El proceso terminó correctamente.");
            } else {
                reject(new Error("Fallo: algo salió mal en el proceso."));
            }
        }, 1000);
    });
}

// Uso con manejo de errores
procesoConRiesgo()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error.message));