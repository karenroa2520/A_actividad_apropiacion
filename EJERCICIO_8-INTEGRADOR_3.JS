/*
Ejercicio integrador 3:

Simulador de Consulta de Usuarios y Roles
Descripción general
Vamos a simular una aplicación que debe consultar información desde diferentes fuentes:
    • Datos básicos del usuario
    • Información de seguridad
    • Roles y permisos
        Algunas consultas son lentas y otras rápidas. El propósito es reconstruir el flujo completo,
        validar que la aplicación no se bloquee y comprender el orden real de los resultados.
Requerimientos del programa
Datos de entrada
    • Un arreglo de IDs de usuarios:
        const usuarios = [101, 102, 103, 104];
    • Tiempos simulados:
    • Consulta de usuario: 1200 ms
    • Consulta de seguridad: 800 ms
    • Consulta de roles: 2000 ms
    • Registro final: 600 ms
Datos de salida esperados
    • Para cada usuario, se debe generar un objeto como este:
    {   id: 101,
        nombre: "Usuario 101",
        seguridad: "OK", 
        roles:  ["admin", "ventas"],
        tiempoTotal: "3.2 segundos"
    }
    • Registro final de la operación:
    • Tiempo total del grupo
    • Usuarios consultados en paralelo
    • Identificación de cuellos de botella
Tarea
    1. Construir una versión bloqueante (solo de demostración):
        o Usar un ciclo que simule operaciones largas.
        o Observar cómo el programa se congela.
        o Documentar por qué no sirve este enfoque.
    2. Versión asincrónica con Promesas:
        o Consultar usuario → consultar seguridad → consultar roles → registrar.
        o Este flujo debe ejecutarse de forma secuencial para cada usuario, pero en
        paralelo entre usuarios.
    3. Versión final con Async/Await:
        o Implementar la misma lógica usando async/await.
        o Registrar tiempos reales con Date.now().
        o Contrastar con la ejecución basada en promesas.
 */

const usuarios = [101, 102, 103, 104];

// VERSIÓN BLOQUEANTE
console.log("Inicio del programa.");
for (let i = 0; i < 90000; i++)
{
    console.log(usuarios[i]);
    
}
console.log("Fin del programa...");

// PROMESAS
function consultarUsuario(id) {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}`})
        }, 1200);
    });
}

function consultarSeguridad(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.seguridad = "OK";
      resolve(usuario);
    }, 800);
  });
}

function consultarRoles(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.roles = ["admin", "ventas"];
      resolve(usuario);
    }, 2000);
  });
}

function registrar(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        usuario.tiempoTotal = "3.2 segundos";
        resolve(usuario)
    }, 600);
  });
}

async function procesarUsuarios(usuarios)
{
    for(let ID of usuarios)
    {
        let usuario = await consultarUsuario(ID);
        usuario = await consultarSeguridad(usuario);
        usuario = await consultarRoles(usuario);
        usuario = await registrar(usuario);

        console.log("Usuario final:", usuario, "\n");
    }
}

procesarUsuarios(usuarios);

// ASYNC/AWAIT

function consultarUsuario(id) {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id, nombre: `Usuario ${id}`})
        }, 1200);
    });
}

function consultarSeguridad(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.seguridad = "OK";
      resolve(usuario);
    }, 800);
  });
}

function consultarRoles(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario.roles = ["admin", "ventas"];
      resolve(usuario);
    }, 2000);
  });
}

function registrar(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(usuario)
    }, 600);
  });
}

async function procesarUsuarios(ID)
{
    const tiempoInicio = Date.now();

    let usuario = await consultarUsuario(ID);
    usuario = await consultarSeguridad(usuario);
    usuario = await consultarRoles(usuario);
    await registrar(usuario);

    const tiempo = (Date.now() - tiempoInicio) / 1000;
    usuario.tiempoTotal = `${tiempo} segundos`;

    return usuario;
}

async function MostrarUsuarios() 
{
    for (let ID of usuarios)
    {
        const resultado = await procesarUsuarios(ID);
        console.log(resultado);
    }
}

MostrarUsuarios();