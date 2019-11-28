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
  fantasma = document.getElementById("fantasma");
  fantasmaH = fantasma.clientHeight;
  fantasmaW = fantasma.clientWidth;
  espacoFV = h - fantasmaH;
  espacoFH = w - fantasmaW;
  
  pacman = document.getElementById("pacman");
  pacmanH = parseInt(pacman.clientHeight);
  pacmanW = parseInt(pacman.clientWidth);
  espacoPV = h - pacmanH;
  espacoPH = w - pacmanW;
  
}


function movePacman() {
  var posicaoPV = Math.round(Math.random() * espacoPV);
  var posicaoPH = Math.round(Math.random() * espacoPH);
  pacman.style.top = posicaoPH + "px";
  pacman.style.left = posicaoPV + "px";
  campoX.value=posicaoPV;
  campoY.value=posicaoPH;
}

// MOVE O PACMAN PARA COORDENADAS ESPECÍFICAS INFORMADAS
function movePacmanXY() {
  var posicaoPV = parseInt(campoX.value);
  var posicaoPH = parseInt(campoY.value);
  if (posicaoPV=="" || posicaoPH=="")
	  alert("Erro! Favor informar um valor!");
  else if (posicaoPV>espacoPV || posicaoPH>espacoPH)
	  alert("Erro! Valores fora do tamanho da tela!");
  else{
	  pacman.style.top = posicaoPH + "px";
	  pacman.style.left = posicaoPV + "px";
	  campoX.value=posicaoPV;
    campoY.value=posicaoPH;
  }

  /* DECLARANDO PONTOS PARA VERIFICAR COLISÃO: */
  var p1x = posicaoPV;
  var p1y = posicaoPH;
  console.log("p1:"+p1x+":"+p1y);
  var p2x = posicaoPV + pacmanH + 0;
  var p2y = posicaoPH;
  console.log("p2:"+p2x+":"+p2y);
  var p3x = posicaoPH + pacmanH + 0;
  var p3y = posicaoPH + pacmanH + 0;
  console.log("p3:"+p3x+":"+p3y);
  var p4x = posicaoPV;
  var p4y = posicaoPV + pacmanH + 0;
  console.log("p4:"+p4x+":"+p4y);

  posicaoFV = parseInt(fantasma.offsetLeft);
  posicaoFH = parseInt(fantasma.offsetTop);
  var f1x = posicaoFV;
  var f1y = posicaoFH;
  console.log("f1:"+f1x+":"+f1y);
  var f2x = posicaoFV + fantasmaH + 0;
  var f2y = posicaoFH;
  console.log("f2:"+f2x+":"+f2y);
  var f3x = posicaoFH + fantasmaH + 0;
  var f3y = posicaoFH + fantasmaH + 0;
  console.log("f3:"+f3x+":"+f3y);
  var f4x = posicaoFV;
  var f4y = posicaoFV + fantasmaH + 0;
  console.log("f4:"+f4x+":"+f4y);

  if(p3x==f1x && p3y==f3y) alert("COLISÃO!");
  if(p1x==f1x && p1y==f1y) alert("COLISÃO!");
}

/*colisões:
p3 -> f1
p4 -> f2
p1 -> f3
p2 -> f4

*/