// estructura.js

const tl = gsap.timeline();

tl.to(".window", { scale: 10, autoAlpha: 0, duration: 2 }, "+=0.5")
    .to(".video-planeta", { xPercent: -100, duration: 2 }, "+=0")
    .from(".estrellas1", { xPercent: 100, duration: 2 }, "-=2")
    .from(".estrellas2", { scale: 1.7, autoAlpha: 0, duration: 2 }, "+=0.5")
    .from(".estrellas3", { scale: 1.7, autoAlpha: 0, duration: 2 }, "+=0.5");

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

export default tl;
