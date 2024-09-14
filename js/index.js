import { hablar, preLoadVoices } from './speech.js';


document.addEventListener('DOMContentLoaded', async () => {
    // Precargar voces
    await preLoadVoices();

    // Sección de habla
    hablar("Bienvenido a la sección de instalacciones.");
});

const mensajes = [
    { pos: 700, mensaje: "Empezaremos con la creación del proyecto." },
    { pos: 1200, mensaje: "Se recomienda el uso de la herramienta laragon para evitar problemas." },
    { pos: 1600, mensaje: "Ya podemos iniciar con la instalacion de vue3."},
    { pos: 2000, mensaje: "vue3 es parecido a angular, ambas son marcos de referencia muy utilizados para el diseño frontal."},
    { pos: 2400, mensaje: "Iniciemos con la configuración, por favor dirigase al archivo VITE.CONFIG.JS ."},
    { pos: 2600, mensaje: "En el lado izquierdo solo tendremos que importar el codigo, mas sin embargo en el lado derecho hay que tener cuidado con las lineas de codigo ."},
    { pos: 3200, mensaje: "Se recomienda el uso de la estructura del cual se le proporciona"},
    { pos: 4000, mensaje: "La estructura es importante debido al seguimiento de creacion recomendado, por favor intente seguir con la estructura"},
    { pos: 4400, mensaje: "Si así lo desea podremos iniciar con la instalacion de la libreria taildwind"},
    { pos: 4700, mensaje: "Cabe aclarar que esta instalacion no es necesaria pero si la desea con mucho gusto lo guiamos"},
    { pos: 5400, mensaje: "en el lado izquierdo solo hay que agregar el content, por favor esté atento a no dañar el codigo, la importacion del lado derecho es simple solo copiar y pegar, pero no se le olvide importarlo en el documento main.js"},
    { pos: 6100, mensaje: "Muchas felicidades por haber terminado con la instalación ya puede continuar con las siguientes secciones"},
    { pos: 6856.66650390625, mensaje: "Informacion y datos reservados, Julián David Peréz Bueno"},
  ];

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollPos);
    
    mensajes.forEach(mensaje => {
      if (scrollPos === mensaje.pos) {
        hablar(mensaje.mensaje);
      }
    });
  });