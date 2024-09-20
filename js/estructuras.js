import { hablar, preLoadVoices } from './speech.js';


document.addEventListener('DOMContentLoaded', async () => {
    // Precargar voces
    await preLoadVoices();

    // Sección de habla
    hablar("Bienvenido a la sección Estructuras.");
});

const mensajes = [
    { pos: 600, mensaje: "Iniciamos con la configuracion de rutas no del api, en este caso del navegador" },
    { pos: 1000, mensaje: "Primeros creamos una estructura HTML es tan facil como usar signo de exclamación más un tabulador y ya tendriamos la estructura HTML lista, dentro de esa estructura colocaremos ese codigo que se muestra en pantalla dentro del body" },
    { pos: 1400, mensaje: "Por favor descargue la configuración en pantalla y guardela dentro de la carpeta vue como router.js y configurela de acuerdo a sus necesidades, cree los componentes que quiera en la carpeta components y coloqueles una ruta, dentro de ese archivo existen algunos ejemplos de como hacerlo" },
    { pos: 1800, mensaje: "Por favor coloque ese codigo dentro del archivo App.vue que está dentro de la carpeta Vue" },
    { pos: 2200, mensaje: "Pasamos a la configuración Principal, simplemente es copiar el codigo que se presenta en pantalla y dejarlo en el archivo main.js de la carpeta vue" },
    { pos: 2600, mensaje: "Por favor descargar el archivo multistore, esté es el ancargado de la aceleración de la carga de datos en el navegador, dirigirse a la carpeta vue y despues a la carpeta store y guardarlo ahí." },
    { pos: 3300, mensaje: "Del archivo que acaba de descargar en la linea 10 y columna 18 cambie la ruta por el nombre correspondiente de su proyecto donde se le indica" },
    { pos: 4300, mensaje: "Por favor tener en cuenta que las siguientes descargas se guardan dentro de la carpeta jscomponents que está dentro de la carpeta vue" },
    { pos: 4700, mensaje: "Estos modelos son los encargados de comunicarse facilmente con el multistore o useGenericStore, uno se encarga del registro y la modificación de datos mientras que el otro se encarga de ver y eliminar datos" },
    { pos: 5000, mensaje: "El main es el que se encarga de reunir toda la información anteriormente mencionada para poder tener un codigo limpio en nuestros componentes, por favor tener en cuenta todos los pasos, el main.js se descarga en la carpeta jscomponents que a su vez está dentro de la carpeta vue" },
    { pos: 5400, mensaje: "Por favor no se le olvide tomar un descanso recuerde ser paciente y mantener la calma en todos sus proyectos, le recomiendo ir por algo de tomar." },
    { pos: 6000, mensaje: "Los siguientes archivos se descargan en la carpeta components, tener cuidado de guardarlos en otro lugar, la lista de datos se encarga precisamente de eso, en useListModel colocar el modelo correspondiente podemos ver la lista de modelos existentes en el archivo models.php en la configuración." },
    { pos: 6500, mensaje: "no olvidar la configuración de los items para poder ver estos datos,aquí se puede ver si todos nuestros pasos estuvieron bien realizados." },
    { pos: 7000, mensaje: "En los registros tener en cuenta los datos que queremos registrar, en useFormModel colocar el modelo correspondiente podemos ver la lista de modelos existentes en el archivo models.php en la configuración." },
    { pos: 7200, mensaje: "no olvidar editar los items de acuerdo a los campos de la tabla o modelo a la cual se está comunicando en este momento." },
    { pos: 7600, mensaje: "Muchas felicidades por haber llegado hasta aquí, espero que todo haya funcionado correctamente y nos veremos en una proxima sección." },
    { pos: 8700, mensaje: "Informacion y datos reservados, Julián David Peréz Bueno" }
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