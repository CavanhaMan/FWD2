var pacman = document.getElementById("pacman");
console.log(pacman);
var objPacman = pacman.getBoundingClientRect();
console.log(objPacman);
var fantasma = document.getElementById("fantasma");
console.log(fantasma);
var objFantasma = fantasma.getBoundingClientRect();
console.log(objFantasma);

posicionaPacman();

function posicionaPacman(){
  var larguraPac = pacman.clientWidth;
  console.log(larguraPac);
  var alturaPac  = pacman.clientHeight;
  console.log(alturaPac);
  var left = parseInt(Math.random() * (window.innerWidth - larguraPac));
  console.log(left);
  var top  = parseInt(Math.random() * (window.innerHeight - alturaPac));
  console.log(top);
  var css = 'position:absolute; top:${top}px; left:${left}px';
  pacman.setAttribute("style",css);
  //pacman.style = css;
  document.getElementsByTagName("body")[0].appendChild(pacman);
}