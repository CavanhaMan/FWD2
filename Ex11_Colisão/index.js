var aviso = document.getElementById("aviso");
var i = 0;    
function doAnimate() {
	if (i++ % 2)
		aviso.style.backgroundColor = "black";
	else
		aviso.style.backgroundColor = "red";
	setTimeout(doAnimate, 200);
};
doAnimate();

/*************************************************/

h = window.innerHeight;
w = window.innerWidth;
var campoX = document.getElementById("vrX");
var campoY = document.getElementById("vrY");

window.onLoad = imgPacman();

function imgPacman() {
  pacman = document.getElementById("pacman");
  pacmanH = pacman.clientHeight;
  pacmanW = pacman.clientWidth;
  espacoV = h - pacmanH;
  espacoH = w - pacmanW;
}

function imgFantasma() {
  pacman = document.getElementById("fantasma");
  fantasmaH = fantasma.clientHeight;
  fantasmaW = fantasma.clientWidth;
  espacoV = h - fantasmaH;
  espacoH = w - fantasmaW;
}

function movePacman() {
  var posicaoV = Math.round(Math.random() * espacoV);
  var posicaoH = Math.round(Math.random() * espacoH);
  pacman.style.top = posicaoV + "px";
  pacman.style.left = posicaoH + "px";
  campoX.value=posicaoH;
  campoY.value=posicaoV;
}

// MOVE O PACMAN PARA COORDENADAS ESPECÍFICAS INFORMADAS
function movePacmanXY() {
  var posicaoV = campoX.value;
  var posicaoH = campoY.value;
  if (posicaoV=="" || posicaoH=="")
	  alert("Erro! Favor informar um valor!");
  else if (posicaoV>espacoV || posicaoH>espacoH)
	  alert("Erro! Valores fora do tamanho da tela!");
  else{
	  pacman.style.top = posicaoV + "px";
	  pacman.style.left = posicaoH + "px";
	  campoX.value=posicaoH;
	  campoY.value=posicaoV;
  }
}

/* DECLARANDO PONTOS PARA VERIFICAR COLISÃO: */
var p1;
var p2;
var p3;
var p4;

var f1;
var f2;
var f3;
var f4;
