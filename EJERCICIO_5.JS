function tomarDatos() {
    return new Promise((resolve) => {
        console.log("1. Tomando datos del usuario...");
        setTimeout(() => {
            const datos = { nombre: "Carlos", edad: 32 };
            console.log("-->Datos obtenidos:", datos);
            resolve(datos);
        }, 1000);
    });
}

function procesarDatos(datos) {
    return new Promise((resolve) => {
        console.log("2. Procesando datos...");
        setTimeout(() => {
            const resultado = {
                ...datos,mensaje: `Hola ${datos.nombre}, tienes ${datos.edad} años.`
            };
            console.log("  -> Datos procesados");
            resolve(resultado);
        }, 1000);
    });
}

function mostrarResultado(resultado) {
    return new Promise((resolve) => {
        console.log("3. Mostrando resultado final:");
        setTimeout(() => {
            console.log(" Bien", resultado.mensaje);
            resolve(); // Opcional, pero mantiene la cadena
        }, 1000);
    });
}

// Encadenamiento con .then()
tomarDatos()
    .then(datos => procesarDatos(datos))
    .then(resultado => mostrarResultado(resultado))
    .then(() => console.log("Flujo completado con promesas"))
    .catch(error => console.error("Error en el flujo:", error));