function tomarDatos(callback) {
    console.log("1. Tomando datos del usuario...");
    setTimeout(() => {
        const datos = { nombre: "Ana", edad: 28 };
        console.log("Datos obtenidos:", datos);
        callback(datos);
    }, 1000);
}

function procesarDatos(datos, callback) {
    console.log("2. Procesando datos...");
    setTimeout(() => {
        const resultado = {
            ...datos,mensaje: `Hola ${datos.nombre}, tienes ${datos.edad} años.`
        };
        console.log("   → Datos procesados");
        callback(resultado);
    }, 1000);
}

function mostrarResultado(resultado) {
    console.log("3. Mostrando resultado final:");
    setTimeout(() => {
        console.log(" Perfeco!", resultado.mensaje);
    }, 1000);
}

// Encadenamiento con callbacks
tomarDatos((datos) => {
    procesarDatos(datos, (resultadoProcesado) => {
        mostrarResultado(resultadoProcesado);
    });
});