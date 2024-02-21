let scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeOutQuart'
});
const staggeringOption = {
    delay: 300,
    distance: "50px",
    duration: 500,
    easing: "ease-in-out",
    origin: "bottom",
};
ScrollReveal().reveal('.card-container', {
    ...staggeringOption,
    interval: 350
    // delay: 300,
    // duration: 1000
});