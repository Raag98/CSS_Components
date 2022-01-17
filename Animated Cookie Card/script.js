const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1});
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation:'-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, '<50%');
tl.fromTo('.text', {opacity: 0, x: 30}, {opacity: 1, x: 0}, '<');

// Jumping Cookie Crumbs
tl.fromTo(".cookie", { y: 0, rotation: '0deg'}, { y: -13, rotation: '-10deg', yoyo: true, repeat:-1});
tl.fromTo("#Crumbs", { y: 0}, { y: -13, yoyo: true, repeat: -1 }, '<');


// Button click hides the card 
const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'});
});