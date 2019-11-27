window.onLoad = Prep();

function Prep() {
  h = window.innerHeight;
  w = window.innerWidth;

  pacman = document.getElementById("pacman");
  pacmanH = pacman.clientHeight;
  pacmanW = pacman.clientWidth;

  espacoV = h - pacmanH;
  espacoH = w - pacmanW;

  movepacman();
}

function movepacman() {
  var posicaoV = Math.round(Math.random() * espacoV);
  var posicaoH = Math.round(Math.random() * espacoH);

  pacman.style.top = posicaoV + "px";
  pacman.style.left = posicaoH + "px";
}