//4. Encadenamiento de Callbacks (Callback Hell controlado)
//Ejercicio:
//Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
//resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.

// Define una función que simula la obtención de datos del usuario.
// Usa un callback para devolver los datos una vez listos (después de 1 segundo).
function tomarDatos(callback) {
    console.log("1. Tomando datos del usuario..."); // Informa que inicia la acción.
    setTimeout(() => {
        // Simula que los datos llegan tras 1 segundo.
        const datos = { nombre: "Ana", edad: 28 };
        console.log("Datos obtenidos:", datos);
        // Llama al callback pasándole los datos recibidos.
        callback(datos);
    }, 1000);
}

// Define una función que procesa los datos recibidos.
// También es asíncrona: tarda 1 segundo en terminar.
function procesarDatos(datos, callback) {
    console.log("2. Procesando datos..."); // Informa que comienza el procesamiento.
    setTimeout(() => {

        
        // Crea un nuevo objeto combinando los datos originales con un mensaje personalizado.
        const resultado = {
            ...datos,
            mensaje: `Hola ${datos.nombre}, tienes ${datos.edad} años.`
        };
        console.log("   → Datos procesados");
        // Invoca el callback con el resultado final del procesamiento.
        callback(resultado);
    }, 1000);
}

// Define una función que muestra el resultado final.
// También simula un retraso de 1 segundo para imitar una operación asíncrona (como renderizar en pantalla).
function mostrarResultado(resultado) {
    console.log("3. Mostrando resultado final:"); // Indica que va a mostrar el resultado.
    setTimeout(() => {
        // Muestra el mensaje personalizado con un toque visual.
        console.log(" Perfeco!", resultado.mensaje);
    }, 1000);
}

// Encadena las tres funciones usando callbacks (también llamado "callback hell").
// Cada paso espera al anterior para continuar, manteniendo el orden lógico:
// 1. tomarDatos → 2. procesarDatos → 3. mostrarResultado.
tomarDatos((datos) => {
    procesarDatos(datos, (resultadoProcesado) => {
        mostrarResultado(resultadoProcesado);
    });
});