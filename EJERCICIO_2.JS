console.log("Antes del ciclo bloqueante");

// Simulamos una operación pesada (¡cuidado: puede tardar varios segundos!)
let suma = 0;
for (let i = 0; i < 500000000; i++) { // 500 millones de iteraciones
    suma += i;

}

console.log("Después del ciclo bloqueante. Suma total:", suma);

// Ahora intentamos programar algo asíncrono...
setTimeout(() => {
    console.log("¿Se ejecutará esto a tiempo?");
}, 0);