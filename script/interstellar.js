let poetryElement = document.createElement('audio');
poetryElement.src = 'music/Cornfield-Chase.webm';
poetryElement.type = 'audio/mp3';
document.body.appendChild(poetryElement);

setTimeout(() => {
    poetryElement.play();
}, 3000);

const glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
});
glide.mount();
const mutePoeBtn = document.getElementById("mute-poetry");
mutePoeBtn.addEventListener("click", ()=> {
    poetryElement.muted = !poetryElement.muted;
    if(poetryElement.muted === false)
    {
        mutePoeBtn.innerHTML = "<i class=\"fas fa-volume-up\"></i>";
    }
    else
    {
        
        mutePoeBtn.innerHTML = "<i class=\"fas fa-volume-mute\"></i>";
    }
});