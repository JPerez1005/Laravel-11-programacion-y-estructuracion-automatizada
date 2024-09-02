// ScrollAnimaciones.js

// ======== Animaciones de Paneles ========

// Animación para la ventana derecha (window_right)
export function animacionWindowRight() {
    gsap.fromTo('.window_right', 
        { autoAlpha: 0, y: 200 }, 
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.window_right',
            start: 'top 100%',  
            end: 'bottom 100%', 
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// Animación para la ventana izquierda (window_left)
export function animacionWindowLeft() {
    gsap.fromTo('.window_left', 
        { autoAlpha: 0, x: 200 },  
        { 
          autoAlpha: 1, 
          x: 0,  
          duration: 1,
          scrollTrigger: {
            trigger: '.window_left',
            start: 'top 100%',  
            end: 'bottom 100%', 
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// Animación para el video de la izquierda (video_left)
export function animacionVideoLeft() {
    gsap.fromTo('.video_left', 
        { autoAlpha: 0, x: -200 },  
        { 
          autoAlpha: 1, 
          x: 0,  
          duration: 1,
          scrollTrigger: {
            trigger: '.video-planeta',
            start: 'top -70%', 
            end: 'bottom -100%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// Animación para el video de la derecha (video_right)
export function animacionVideoRight() {
    gsap.fromTo('.video_right', 
        { autoAlpha: 0, y: -200 },  
        { 
          autoAlpha: 1, 
          y: 0,  
          duration: 4,
          scrollTrigger: {
            trigger: '.video-planeta', 
            start: 'top -70%', 
            end: 'bottom -100%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// ======== Animaciones de Botones ========

// Animación para el botón "instalaciones"
export function animacionInstalaciones() {
    gsap.fromTo('.instalaciones', 
        { autoAlpha: 0, x: 200 },  
        { 
          autoAlpha: 1, 
          x: 0,  
          duration: 4,
          scrollTrigger: {
            trigger: '.estrellas1', 
            start: 'top -300%', 
            end: 'bottom -400%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// Animación para el botón "estructuras"
export function animacionEstructuras() {
    gsap.fromTo('.estructuras', 
        { autoAlpha: 0, x: -200 },  
        { 
          autoAlpha: 1, 
          x: 0,  
          duration: 4,
          scrollTrigger: {
            trigger: '.estrellas1', 
            start: 'top -550%', 
            end: 'bottom -800%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// Animación para el botón "api"
export function animacionApi() {
    gsap.fromTo('.api', 
        { autoAlpha: 0, y: 100 },  
        { 
          autoAlpha: 1, 
          y: 0,  
          duration: 4,
          scrollTrigger: {
            trigger: '.estrellas1', 
            start: 'top -800%', 
            end: 'bottom -1200%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// ======== Animaciones de Efecto ========
export function animacionDispersion() {
    gsap.fromTo('.dispersion', 
        { autoAlpha: 0, y: 200 },  
        { 
          autoAlpha: 1, 
          y: -1000,  
          duration: 7,
          scrollTrigger: {
            trigger: '.estrellas1',
            start: 'top -900%', 
            end: 'bottom -1200%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}