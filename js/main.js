gsap.registerPlugin(ScrollTrigger);

// Create a sequence that moves 3 of the panels in from different directions
const tl = gsap.timeline();

tl.to(".window", { scale: 10, autoAlpha: 0, duration: 2 }, "+=0.5")
    .to(".video-planeta", { xPercent: -100, duration: 2 }, "+=0")
    .from(".estrellas1", { xPercent: 100, duration: 2 }, "-=2")
    .from(".estrellas2", { scale: 1.7, autoAlpha: 0, duration: 2 }, "+=0.5")
    .from(".estrellas3", { scale: 1.7, autoAlpha: 0, duration: 2 }, "+=0.5");

// Pin the container and link the animation to the scrollbar (scrub: true).
ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top top",
    end: "+=6000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});

gsap.to(".estrellas1", {
    scale: 1.1,      // Escalar hasta 120%
    duration: 5,     // Duración de la animación de ida
    yoyo: true,      // Reversa la animación al completarse
    repeat: -1,      // Repetir indefinidamente
    ease: "power1.inOut" // Suaviza la animación
});

gsap.fromTo('.window_right', 
    { autoAlpha: 0, y: 200 }, 
    { 
      autoAlpha: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: '.window_right',
        start: 'top 100%',  // Ajusta estos valores según donde quieras que la animación comience
        end: 'bottom 100%', // Ajusta estos valores según donde quieras que la animación termine
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

gsap.fromTo('.window_left', 
    { autoAlpha: 0, x: 200 },  // El elemento comienza fuera de la vista, más arriba
    { 
      autoAlpha: 1, 
      x: 0,  // El elemento se desplaza hacia abajo hasta su posición original
      duration: 1,
      scrollTrigger: {
        trigger: '.window_left',
        start: 'top 100%',  // La animación comienza cuando la parte superior del elemento llega al fondo de la ventana
        end: 'bottom 100%', // La animación termina cuando la parte inferior del elemento llega al fondo de la ventana
        toggleActions: 'play reverse play reverse', // Reproduce la animación al desplazarse en ambas direcciones
      }
    }
);

gsap.fromTo('.video_left', 
    { autoAlpha: 0, x: -200 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      x: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 1,
      scrollTrigger: {
        trigger: '.video-planeta', // Inicia la animación cuando .video-planeta entra en la vista
        start: 'top -70%', 
        end: 'bottom -100%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

gsap.fromTo('.video_right', 
    { autoAlpha: 0, y: -200 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      y: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 4,
      scrollTrigger: {
        trigger: '.video-planeta', // Inicia la animación cuando .video-planeta entra en la vista
        start: 'top -70%', 
        end: 'bottom -100%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

// Crear la división de texto
let myText1 = new SplitType('#split');
let myText2 = new SplitType('#split2');
let myText3 = new SplitType('#split3');

// Animación para el primer texto
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

// Animación para el segundo texto
gsap.fromTo('#split2 .char',
    { autoAlpha: 0 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      y: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 1,
      stagger: 0.05,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.estrellas2', // Inicia la animación cuando .estrellas2 entra en la vista
        start: 'top -600%', 
        end: 'bottom -800%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

// Animación para el tercer texto
gsap.fromTo('#split3 .char',
    { autoAlpha: 0 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      y: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 1,
      stagger: 0.05,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.estrellas3', // Inicia la animación cuando .estrellas3 entra en la vista
        start: 'top -900%', 
        end: 'bottom -1200%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);




gsap.fromTo('.instalaciones', 
    { autoAlpha: 0, x: 200 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      x: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 4,
      scrollTrigger: {
        trigger: '.estrellas1', // Inicia la animación cuando .video-planeta entra en la vista
        start: 'top -300%', 
        end: 'bottom -400%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

gsap.fromTo('.estructuras', 
    { autoAlpha: 0, x: -200 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      x: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 4,
      scrollTrigger: {
        trigger: '.estrellas1', // Inicia la animación cuando .video-planeta entra en la vista
        start: 'top -600%', 
        end: 'bottom -800%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

gsap.fromTo('.api', 
    { autoAlpha: 0, y: 100 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      y: 0,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 4,
      scrollTrigger: {
        trigger: '.estrellas1', // Inicia la animación cuando .video-planeta entra en la vista
        start: 'top -900%', 
        end: 'bottom -1200%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

gsap.fromTo('.dispersion', 
    { autoAlpha: 0, y: 200 },  // Comienza fuera de la vista, más abajo
    { 
      autoAlpha: 1, 
      y: -1000,  // El elemento se mueve hacia arriba hasta su posición original
      duration: 7,
      scrollTrigger: {
        trigger: '.estrellas1', // Inicia la animación cuando .video-planeta entra en la vista
        start: 'top -900%', 
        end: 'bottom -1200%',
        toggleActions: 'play reverse play reverse', // Activa la animación en ambas direcciones
      }
    }
);

const parallax_el=document.querySelectorAll('.parallax');

let xValue=0,
yValue=0;

window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
});