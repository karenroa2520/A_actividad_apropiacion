/*
    Ejercicio integrador 1:

    Simular un proceso de “consulta de usuario”, que requiere:
    1. “Buscar usuario” (promesa de 1 segundo)
    2. “Consultar permisos” (promesa de 2 segundos)
    3. “Generar reporte final” (promesa de 1 segundo) Realizarlo en tres versiones:
    • Con callbacks
    • Con promesas
    • Con async/await
    Meta: identificar ventajas y desventajas reales de cada técnica.
*/

// Callbacks
function buscarUsuario(callback) {
    setTimeout(() => {
        console.log("Usuario encontrado.");
        callback();
    }, 1000);
}

function consultarPermisos(callback) {
    setTimeout(() => {
        console.log("Permisos consultados.");
        callback();
    }, 2000);
}

function generarReporte(callback) {
    setTimeout(() => {
        console.log("Reporte generado.");
        callback();
    }, 1000);
}

buscarUsuario(() => {
  consultarPermisos(() => {
    generarReporte(() => {
      console.log("Proceso finalizado.");
    });
  });
});

// Promesas
function buscarUsuario() {
    return new Promise((resolve, reject) =>
    {
        const usuario = true;
        if (usuario)
        {
            setTimeout(() => {
                resolve("Usuario encontrado.");
            }, 1000);
        }
        else 
        {
            reject("Usuario NO encontrado.");
        }
    });
}

function consultarPermisos() {
    return new Promise((resolve, reject) =>
    {
        const permisos = true;
        if(permisos)
        {
            setTimeout(() => {
                resolve("Permisos consultados.");
            }, 2000);
        }
        else
        {
            reject("Los Permisos NO se pueden consultar.");
        }
    });
}

function generarReporte() {
    return new Promise((resolve, reject) =>
    {
        const reporte = true;
        if(reporte)
        {
            setTimeout(() => {
                resolve("Reporte generado.");
            }, 1000);
        }
        else
        {
            reject("Error.El Reporte NO se puede generar.");
        }
    });
}

buscarUsuario()
.then(() => consultarPermisos())
.then(() => generarReporte(console.log("Proceso finalizado.")))
.catch((error) => {
    console.log(error);
});

// Async/await
async function consultaUsuario() {
    try 
    {
        const usuario = await buscarUsuario();
        console.log(usuario);

        const permisos = await consultarPermisos();
        console.log(permisos);

        const reporte = await generarReporte();
        console.log(reporte);

        console.log("Proceso finalizado.");
    } 
    catch (error) 
    {
        console.log(error);
    }
}

consultaUsuario();