//5. Transformando Callbacks en Promesas
//Ejercicio:
//Convertir el ejercicio anterior en una estructura basada en Promesas con .then().



// Función que simula obtener datos del usuario de forma asíncrona.
// Devuelve una Promise que se resolverá con los datos tras 1 segundo.
function tomarDatos() {
    return new Promise((resolve) => {
        console.log("1. Tomando datos del usuario..."); // Indica el inicio del proceso.
        setTimeout(() => {
            // Simula que los datos llegan después de 1 segundo.
            const datos = { nombre: "Carlos", edad: 32 };
            console.log("-->Datos obtenidos:", datos);
            // Resuelve la promesa y entrega los datos al siguiente paso.
            resolve(datos);
        }, 1000);
    });
}

// Función que procesa los datos recibidos y devuelve una nueva Promise.
function procesarDatos(datos) {
    return new Promise((resolve) => {
        console.log("2. Procesando datos..."); // Indica que comienza el procesamiento.
        setTimeout(() => {
            // Crea un objeto con los datos originales más un mensaje personalizado.
            const resultado = {
                ...datos,
                mensaje: `Hola ${datos.nombre}, tienes ${datos.edad} años.`
            };
            console.log("  -> Datos procesados");
            // Resuelve la promesa con el resultado procesado.
            resolve(resultado);
        }, 1000);
    });
}

// Función que muestra el resultado final y devuelve una Promise.
function mostrarResultado(resultado) {
    return new Promise((resolve) => {
        console.log("3. Mostrando resultado final:"); // Prepara la visualización.
        setTimeout(() => {
            // Muestra el mensaje personalizado en consola.
            console.log(" Bien", resultado.mensaje);
            // Resuelve la promesa (aunque no haya valor, permite continuar la cadena).
            resolve();
        }, 1000);
    });
}

// Encadena las tres operaciones usando .then(), lo que garantiza que
// cada paso comience solo cuando el anterior haya terminado.
tomarDatos()
    .then(datos => procesarDatos(datos))           // Paso 1 → Paso 2
    .then(resultado => mostrarResultado(resultado)) // Paso 2 → Paso 3
    .then(() => console.log("Flujo completado con promesas")) // Paso final
    .catch(error => console.error("Error en el flujo:", error)); // Manejo de errores (aunque no hay rechazos en este ejemplo)