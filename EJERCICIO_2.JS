//2. Identificando código bloqueante
//Ejercicio:
//Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
//ejecución del programa.


// El sistema muestra un mensaje al inicio para indicar que va a comenzar una operación.
console.log("Antes del ciclo bloqueante");

// El sistema inicia una operación en bucle que suma números desde 0 hasta 499,999,999.
// Esta operación es sincrónica y bloqueante: mientras se ejecuta, el sistema no puede hacer nada más.
let suma = 0;
for (let i = 0; i < 500000000; i++) {
    suma += i; // En cada vuelta, el sistema acumula el valor de 'i' en la variable 'suma'.
}

// Una vez terminado el cálculo (tras varios segundos), el sistema imprime el resultado total.
console.log("Después del ciclo bloqueante. Suma total:", suma);

// El sistema programa una tarea asíncrona con setTimeout (retraso de 0 ms) para que se ejecute "lo antes posible".
// Sin embargo, como el motor de JavaScript está ocupado con el bucle anterior, esta tarea queda en espera.
setTimeout(() => {
    // Esta línea solo se ejecutará después de que termine todo el código sincrónico.
    console.log("¿Se ejecutará esto a tiempo?");
}, 0);