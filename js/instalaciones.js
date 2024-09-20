import { hablar, preLoadVoices } from './speech.js';


document.addEventListener('DOMContentLoaded', async () => {
    // Precargar voces
    await preLoadVoices();

    // Sección de habla
    hablar("Bienvenido a la seccion Instalaciones.");
});

document.getElementById('projectButton').addEventListener('click', function() {
    const projectName = prompt("Ingrese el nombre del proyecto:");
    if (projectName) {
        // Reemplaza "nombre-del-proyecto" en el código con el nombre ingresado por el usuario
        const codeBlock = document.getElementById('codeBlock');
        const codeBlock2 = document.getElementById('codeBlock2');
        const codeBlock3 = document.getElementById('codeBlock3');
        codeBlock.textContent = `
composer global remove laravel/installer
composer global require laravel/installer
laravel new ${projectName}
        `;
        codeBlock2.textContent=`
cd ${projectName}
npm install vue
npm install vue-loader
npm install @vitejs/plugin-vue
npm install vue-router@4
        `;
        codeBlock3.textContent=`
CREATE DATABASE ${projectName}
        `;
    }
});
const mensajes = [
    { pos: 700, mensaje: "Empezaremos con la creación del proyecto.Por favor indiquenos cual es el nombre del proyecto." },
    { pos: 1200, mensaje: "Por favor copie el codigo que se muestra en pantalla, se recomienda ser paciente en esta parte. y cree el proyecto como mejor le parezca" },
    { pos: 1550, mensaje: "Ya podemos iniciar con la instalacion de vue3."},
    { pos: 2000, mensaje: "vue3 es parecido a angular, ambas son marcos de referencia muy utilizados para el diseño frontal."},
    { pos: 2400, mensaje: "Iniciemos con la configuración, por favor dirigase al archivo VITE.CONFIG.JS ."},
    { pos: 2500, mensaje: "En el lado izquierdo solo tendremos que importar el codigo, mas sin embargo en el lado derecho hay que tener cuidado con las lineas de codigo ."},
    { pos: 3200, mensaje: "Procederemos a instalar la api"},
    { pos: 4000, mensaje: "Se recomienda el uso de la estructura del cual se le proporciona, y configurar la base de datos en el archivo .env en la linea 25"},
    { pos: 3600, mensaje: "La estructura es importante debido al seguimiento de creacion recomendado, por favor intente seguir con la estructura, no olvidar crear la base de datos"},
    { pos: 4800, mensaje: "Procederemos a hacer la instalacion de vue router"},
    { pos: 5000, mensaje: "Pinia nos servirá para la carga de datos mas rapidos"},
    { pos: 5700, mensaje: "Si así lo desea podremos iniciar con la instalacion de la libreria taildwind"},
    { pos: 6000, mensaje: "Cabe aclarar que esta instalacion no es necesaria pero si la desea con mucho gusto lo guiamos"},
    { pos: 6600, mensaje: "en el lado izquierdo solo hay que agregar el content, por favor esté atento a no dañar el codigo, la importacion del lado derecho es simple solo copiar y pegar, pero no se le olvide importarlo en el documento main.js"},
    { pos: 7200, mensaje: "Muchas felicidades por haber terminado con la instalación ya puede continuar con las siguientes secciones"},
    { pos: 8055, mensaje: "Informacion y datos reservados, Julián David Peréz Bueno"},
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