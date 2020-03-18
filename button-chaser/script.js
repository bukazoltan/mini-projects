var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations = 0;
const gameArea = document.getElementById("gameArea");
const scoreLabel = document.getElementById('scoreLabel');
const dot = document.getElementById("dot");

const setGameAreaBounds = () => {
  aWidth = innerWidth;
  aHeight = innerHeight;
  aWidth -= 22;
  aHeight -= 97;
  gameArea.style.width = aWidth + "px";
  gameArea.style.width = aHeight + "px";
  dot.addEventListener("click", detectHit);
  aWidth -= 74;
  aHeight -= 74;
  moveDot();
};

window.addEventListener('load', setGameAreaBounds);

const detectHit = () => {
  score++;
  scoreLabel.innerHTML = `Score: ${score}`;
};

const moveDot = () => {
  var x = Math.floor(Math.random() * aWidth);
  var y = Math.floor(Math.random() * aHeight);
  if (x < 10) {
    x = 10;
  };
  if (y < 10) {
    y = 10;
  };
  dot.style.left = x + 'px';
  dot.style.top = y + 'px';
  if (iterations < 30) {
    timer = setTimeout("moveDot()", 700);
  } else {
    scoreLabel.innerHTML += "     Game Over!";
    dot.removeEventListener('click', detectHit);
    clearTimeout(timer);
  }
  iterations++;
};