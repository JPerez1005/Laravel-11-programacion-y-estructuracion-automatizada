import { hablar, preLoadVoices } from './speech.js';

// Mostrar un mensaje de carga mientras se cargan los recursos
document.getElementById('loader').style.display = 'block';
        
// Evento 'load' para saber cuando todo está listo
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', async () => {
    // Precargar voces
    await preLoadVoices();

    // Sección de habla
    hablar("Bienvenido de nuevo Julián Peréz.");
});

const mensajes = [
    { pos: 720, mensaje: "Espero se encuentre muy bien, por favor siga bajando." },
    { pos: 2000, mensaje: "En la sección de Instalaciones nos encontramos con la mayoria de instalaciones, esto no quiere decir que no habrá instalaciones más adelante, por favor de click en la palabra de instalaciones para continuar con esta sección."},
    { pos: 3600, mensaje: "En la sección Api Rest nos concentramos en la creación del backend, por favor preste mucha atención en esta sección, se recomienda no saltarse ningún paso aquí, dé click en la palabra Api Rest para continuar."},
    { pos: 5300, mensaje: "La estructura es importante debido al seguimiento de creacion recomendado, por favor intente seguir con la estructura"},
    { pos: 6000, mensaje: "Por favor dé click en la palabra Estructura, y muchas felicidades por llegar hasta aquí, espero le haya gustado mucho mi servicio, fué un gusto acompañarlo hasta aquí. Buena suerte en todos sus proyectos"},
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