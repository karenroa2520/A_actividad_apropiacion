//1. Explorando la asincronía básica
//Ejercicio:
//Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
//y finalmente “Fin”.



// Imprime "Inicio" inmediatamente al ejecutar el programa.
console.log("Inicio");

// Programa una función para ejecutarse de forma asíncrona después de 2000 milisegundos (2 segundos).
// Durante esos 2 segundos, el programa no se detiene; sigue ejecutando lo que viene a continuación.
setTimeout(() => {
    // Este mensaje se imprime solo después de que pasen los 2 segundos.
    console.log("Operación asíncrona completada (después de 2 segundos)");
}, 2000);

// Imprime "Fin" inmediatamente, sin esperar a que termine el temporizador.
console.log("Fin");