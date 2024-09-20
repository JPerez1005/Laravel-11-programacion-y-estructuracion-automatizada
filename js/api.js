import { hablar, preLoadVoices } from './speech.js';


document.addEventListener('DOMContentLoaded', async () => {
    // Precargar voces
    await preLoadVoices();

    // Sección de habla
    hablar("Bienvenido a la sección Api rrest.");
});

const mensajes = [
    { pos: 800, mensaje: "Las migraciones pueden verse de manera simple siendo estás las que se comunican con cada tabla de la base de datos.No es necesario crear una tabla en la base de datos, ya que la propia migración crea la tabla en la base de datos" },
    { pos: 1000, mensaje: "En el lado izquierdo podremos crear una migracion o una tabla, en el lado derecho puede agregar los campos dinamicamente los que quiera para su tabla de la base de datos" },
    { pos: 1400, mensaje: "Con el primer codigo creamos las tablas en la base de datos, con el segundo podremos actualizar las tablas dependiendo de nuestras migraciones y con el tercero podremos eliminar migraciones una por una" },
    { pos: 1863, mensaje: "A continuacion los modelos, estós se comunican con las migraciones y a la vez con el controlador, existe el modelo padre e hijo hay otros que son hibridos." },
    { pos: 2163, mensaje: "Un dato importante es que cada modelo debe de coincidir con la migración correspondiente, por favor coloque los campos con los mismos campos que colocó en las migraciones." },
    { pos: 3063, mensaje: "En los modelos las funciones del request por favor no olvide configurar las condiciones, en pantalla se muestran algunos tipos de condiciones." },
    { pos: 3463, mensaje: "El multicontrolador se encarga de comunicarse con el modelo y con las rutas, dependiendo de las funciones y rutas configuradas se toman ciertas acciones, posiblemente lo entienda más adelante." },
    { pos: 3800, mensaje: "En el lado izquierdo esta el registro de los modelos que debe de tomar en cuenta el multicontrolador, probablemente lo necesitemos más adelante y en el lado derecho está el multicontrolador, este generaliza o automatiza los modelos registrados con funciones basicas como crear,editar y elimnar." },
    { pos: 4700, mensaje: "Aquí se configuran las rutas del api, para poder encontrar estas mismas rutas en un navegador." },
    { pos: 5100, mensaje: "Por favor procure no dañar el codigo y siga con las instrucciones." },
    { pos: 5614, mensaje: "Muchas felicidades por llegar hasta aquí, nos encontraremos de nuevo en la seccion de estructuras." },
    { pos: 6450, mensaje: "Informacion y datos reservados, Julián David Peréz Bueno"}
  ];

mensajes.forEach(mensaje => mensaje.activado = false);

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const rango = 50;
    console.log(scrollPos);
    
    mensajes.forEach(mensaje => {
    if (!mensaje.activado && scrollPos >= mensaje.pos - rango && scrollPos <= mensaje.pos + rango) {
        hablar(mensaje.mensaje);
        mensaje.activado = true; // Marcar mensaje como activado
    }
    });
});