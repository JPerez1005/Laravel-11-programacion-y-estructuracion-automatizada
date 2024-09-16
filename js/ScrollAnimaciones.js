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
          immediateRender: true,
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
          immediateRender: true,
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
          immediateRender: true,
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
          immediateRender: false,
          scrollTrigger: {
            trigger: '.video-planeta', 
            start: 'top -70%', 
            end: 'bottom -100%',
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
          immediateRender: false,
          scrollTrigger: {
            trigger: '.estrellas1',
            start: 'top -900%', 
            end: 'bottom -1200%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}