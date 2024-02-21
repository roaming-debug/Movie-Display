const glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
});
glide.mount();

const btnExplore = document.getElementById("explore-more-1");
btnExplore.addEventListener("click", () => {
    location.href = 'interstellar.html';
});
