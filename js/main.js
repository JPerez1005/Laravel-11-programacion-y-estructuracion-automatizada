gsap.registerPlugin(ScrollTrigger);
const d=document;

import tl from './estructura.js';
// Importar las animaciones de paneles y botones desde ScrollAnimaciones.js
import { 
    animacionWindowRight, 
    animacionWindowLeft, 
    animacionVideoLeft, 
    animacionVideoRight, 
    animacionInstalaciones, 
    animacionEstructuras, 
    animacionApi ,
    animacionDispersion
} from './ScrollAnimaciones.js';
import { 
    animateText1,
    animateText2,
    animateText3
} from './SplitTextAnimation.js';
import { initMouseMoveParallax } from './MouseMoveAnimation.js';



// Llamar las funciones para iniciar las animaciones cuando la página se carga
d.addEventListener('DOMContentLoaded', () => {
    // Ejecutar las animaciones de paneles
    animacionWindowRight();
    animacionWindowLeft();
    animacionVideoLeft();
    animacionVideoRight();

    // Ejecutar las animaciones de botones
    animacionInstalaciones();
    animacionEstructuras();
    animacionApi();

    // Iniciar animaciones de Efecto
    animacionDispersion();

    // Animaciones de Texto de escritura
    animateText1();
    animateText2();
    animateText3();

    // Inicializa la animación de parallax con el movimiento del mouse
    initMouseMoveParallax();

});