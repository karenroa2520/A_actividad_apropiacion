/*
Ejercicio integrador 2:
    Centro de Procesamiento de Órdenes
    Vamos a simular un centro que procesa órdenes de forma asincrónica. Cada orden
    requiere pasar por varios pasos: verificación, procesamiento, registro y notificación.
    Algunos pasos tardan más tiempo que otros y debemos garantizar que el sistema no se
    bloquee. Usaremos callbacks, promesas y async/await dentro del mismo ejercicio para
    comparar cómo evoluciona el flujo.
    Este ejercicio exige analizar: tiempos, dependencias, orden de ejecución y estructura del
    código.
    Requerimientos del programa
    Datos de entrada
    • Una lista de órdenes en un arreglo, por ejemplo:
    const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
    ];
        • Tiempos simulados de los procesos:
        • Verificación: 1500 ms
        • Procesamiento: 2000 ms
        • Registro: 1000 ms
        • Notificación: 500 ms
    Datos de salida esperados
    • Mensajes con marcas de tiempo que permitan determinar:
        o Duración total del proceso por orden o Orden de
        ejecución real
        o Identificación de procesos paralelos y procesos
        secuenciales
    • Un reporte final indicando qué órdenes se completaron y en qué tiempos.
    Tareas
        1. Primera parte (Callbacks):
            o Implementar el flujo completo de una sola orden usando callbacks. o Analizar
            el tiempo total.
            o Identificar visualmente el “callback hell” y documentarlo.

        2. Segunda parte (Promesas + then):
            o Reescribir el mismo proceso usando promesas. o Validar si la estructura se
            vuelve más clara.
            o Registrar tiempos.

        3. Tercera parte (Async/Await):
            o Implementar el procesamiento de todas las órdenes con async/await. o
            Procesarlas en serie (una detrás de otra).
            o Luego procesarlas en paralelo (todas a la vez).
            o Comparar tiempos y justificar la diferencia.

    Objetivos de análisis
    Se requiere analizar los siguientes puntos:
        • Explicar por qué la versión sincrónica (si existiera) bloquearía todo.
        • Identificar qué tareas sí pueden correr en paralelo y justificarlas.
        • Comparar los tiempos reales vs. los tiempos teóricos.
        • Explicar cómo el event loop ordena la ejecución.
        • Reconocer cuándo usar callbacks, promesas o async/await para problemas reales.
*/

const ordenes = [
  { id: 1, cliente: "Ana", monto: 120000 },
  { id: 2, cliente: "Luis", monto: 80000 },
  { id: 3, cliente: "María", monto: 150000 }
];

// CALLBACKS
function verificar(orden, callback) {
  setTimeout(() => {
    console.log(`Verificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
    callback(orden);
  }, 1500);
}
// Verificar: 1.5 segundos
function procesar(orden, callback) {
  setTimeout(() => {
    console.log(`Procesada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
    callback(orden);
  }, 2000);
}
// Procesar: 2 segundos
function registrar(orden, callback) {
  setTimeout(() => {
    console.log(`Registrada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
    callback(orden);
  }, 1000);
}
// Registrar: 1 segundo
function notificar(orden) {
  setTimeout(() => {
    console.log(`Notificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
  }, 500);
}
// Notificar: 0.5 segundos
verificar(ordenes[0], orden => {
  procesar(orden, orden => {
    registrar(orden, orden => {
      notificar(orden);
    });
  });
});

// Tiempo total: 1.5 + 2 + 1 + 0.5 = 5 Segundos.

// PROMESAS
function verificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Verificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 1500);
  });
}

function procesar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Procesada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 2000);
  });
}

function registrar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Registrada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 1000);
  });
}

function notificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Notificada orden: ${orden.id} - ${orden.cliente} - ${orden.monto}`);
      resolve(orden);
    }, 500);
  });
}

verificar(ordenes[1])
  .then(procesar)
  .then(registrar)
  .then(notificar);

// ASYNC/AWAIT
function verificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Verificada orden...`);
      resolve(orden);
    }, 1500);
  });
}

function procesar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Procesada orden...`);
      resolve(orden);
    }, 2000);
  });
}

function registrar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Registrada orden...`);
      resolve(orden);
    }, 1000);
  });
}

function notificar(orden) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Notificada orden...`);
      resolve(orden);
    }, 500);
  });
}

async function consultarOrden(orden)
{
    try
    {
        const verficarOrden = await verificar(orden);
        console.log(verficarOrden);
        
        const procesarOrden = await procesar(verficarOrden);
        console.log(procesarOrden);

        const registrarOrden = await registrar(procesarOrden);
        console.log(registrarOrden);

        const notificarOrden = await notificar(registrarOrden);
        console.log(notificarOrden, "\nSIGUIENTE ORDEN.. \n");
    }
    catch (error)
    {
        console.log(error);
    }
}

async function OrdenEnseries() 
{
    for (let orden of ordenes)
    {
        await consultarOrden(orden);
    }
}

OrdenEnseries();