const colors = [
    "pink",
    "red",
    "cyan",
    "darkgreen",
    "gold",
    "MediumTurquoise",
    "salmon",
    "yellow"
]

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
    circle.style.background = randomColor();
})