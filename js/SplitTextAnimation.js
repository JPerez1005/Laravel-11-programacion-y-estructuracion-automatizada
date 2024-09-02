// SplitTextAnimation.js

// Crear la división de texto
let myText1 = new SplitType('#split');
let myText2 = new SplitType('#split2');
let myText3 = new SplitType('#split3');

// Función para la animación del primer texto
export function animateText1() {
    gsap.fromTo('#split .char',
        { autoAlpha: 0 }, 
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.05,
          delay: 0.2,
          scrollTrigger: {
            trigger: '.estrellas1',
            start: 'top -300%', 
            end: 'bottom -400%',
            toggleActions: 'play reverse play reverse',
          }
        }
    );
}

// Función para la animación del segundo texto
export function animateText2() {
    gsap.fromTo('#split2 .char',
        { autoAlpha: 0 }, 
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.05,
          delay: 0.2,
          scrollTrigger: {
            trigger: '.estrellas2', 
            start: 'top -550%', 
            end: 'bottom -800%',
            toggleActions: 'play reverse play reverse', 
          }
        }
    );
}

// Función para la animación del tercer texto
export function animateText3() {
    gsap.fromTo('#split3 .char',
        { autoAlpha: 0 }, 
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.05,
          delay: 0.2,
          scrollTrigger: {
            trigger: '.estrellas3', 
            start: 'top -800%', 
            end: 'bottom -1200%',
            toggleActions: 'play reverse play reverse', 
          }
        }
    );
}

