export function initMouseMoveParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    let xValue = 0, yValue = 0;

    window.addEventListener('mousemove', (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

        parallaxElements.forEach((el) => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;

            el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
        });
    });
}
