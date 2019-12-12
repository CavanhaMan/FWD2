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
  fAltura = fantasma.clientHeight;
  fLargura = fantasma.clientWidth;
  espacoFV = h - fAltura;
  espacoFH = w - fLargura;
  
  pacman = document.getElementById("pacman");
  pAltura = parseInt(pacman.clientHeight);
  pLargura = parseInt(pacman.clientWidth);
  espacoPV = h - pAltura;
  espacoPH = w - pLargura;
}


function movePacman() {
  var posicaoPV = Math.round(Math.random() * espacoPV);
  var posicaoPH = Math.round(Math.random() * espacoPH);
  pacman.style.top = posicaoPV + "px";
  pacman.style.left = posicaoPH + "px";
  campoX.value=posicaoPV;
  campoY.value=posicaoPH;

  testaColisao();
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
	  pacman.style.top = posicaoPV + "px";
	  pacman.style.left = posicaoPH + "px";
	  campoX.value=posicaoPV;
      campoY.value=posicaoPH;
  }

  testaColisao();
}

function testaColisao(){
  /* DECLARANDO PONTOS PARA VERIFICAR COLISÃO: */
  posicaoPV = parseInt(pacman.offsetLeft);
  posicaoPH = parseInt(pacman.offsetTop);
  var p1x = posicaoPV;
  var p1y = posicaoPH;
  console.log("p1-> " + p1x + ":" + p1y);
  var p2x = posicaoPV + pLargura;
  var p2y = posicaoPH;
  console.log("p2->" + p2x + ":" + p2y);
  var p3x = posicaoPV + pAltura;
  var p3y = posicaoPH + pLargura;
  console.log("p3->" + p3x + ":" + p3y);
  var p4x = posicaoPV;
  var p4y = posicaoPH + pAltura;
  console.log("p4->" + p4x + ":" + p4y);

  //DECLARANDO PONTOS DO FANTASMA PARA VERIFICAR COLISÃO:
  posicaoFV = parseInt(fantasma.offsetLeft);
  posicaoFH = parseInt(fantasma.offsetTop);
  var f1x = posicaoFV;
  var f1y = posicaoFH;
  console.log("f1->" + f1x + ":" + f1y);
  var f2x = posicaoFV + fLargura;
  var f2y = posicaoFH;
  console.log("f2->" + f2x + ":" + f2y);
  var f3x = posicaoFV + fAltura;
  var f3y = posicaoFH + fLargura;
  console.log("f3->" + f3x + ":" + f3y);
  var f4x = posicaoFV;
  var f4y = posicaoFH + fAltura;
  console.log("f4->" + f4x + ":" + f4y);

  console.log("_________________");

  if((p3x>=f1x && p3x<=f2x && p3y>=f1y && p3y<=f4y) || 
     (p4x<=f2x && p4x>=f1x && p4y>=f2y && p4y<=f3y) || 
     (p2x>=f4x && p2x<=f3x && p2y<=f4y && p2y>=f1y) || 
     (p1x<=f3x && p1x>=f4x && p1y<=f3y && p1y>=f2y)) aviso.innerHTML = "_C O L I S Ã O !_";
  else aviso.innerHTML = "";

/*  if(p3x>=f1x && p3x<=f2x && p3y>=f1y && p3y<=f4y) alert("COLISÃO P3!"); 
  if(p4x<=f2x && p4x>=f1x && p4y>=f2y && p4y<=f3y) alert("COLISÃO P4!"); 
  if(p2x>=f4x && p2x<=f3x && p2y<=f4y && p2y>=f1y) alert("COLISÃO P2!"); 
  if(p1x<=f3x && p1x>=f4x && p1y<=f3y && p1y>=f2y) alert("COLISÃO P1!");
*/
}

/*colisões:
p3
p3x>=f1x
p3x<=f2x
p3y>=f1y
p3y<=p4y

p4
p4x<=f2x
p4x>=f1x
p4y>=f2y
p4y<=f3y

p2
p2x>=f4x
p2x<=f3x
p2y<=f4y
p2y>=f1y

p1
p1x<=f3x
p1x>=f4x
p1y<=f3y
p1y>=f2y


*/