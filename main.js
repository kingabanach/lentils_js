window.addEventListener ("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const lentils = document.querySelectorAll(".lentils div");
    const visual = document.querySelector(".visual");
    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60b2d3'];

    lentils.forEach((lentil, index) => {
        lentil.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    });

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }

});
