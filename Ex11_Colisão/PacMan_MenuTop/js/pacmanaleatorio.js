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
window.onLoad = imgPacman();
var h;
var w;

function imgPacman() {
  w = window.innerWidth;
  h = window.innerHeight;
  console.log("Janela2: " + w + ":" + h);

  var sh = screen.height;
  var sw = screen.width;
  console.log("Monitor: " + sw + ":" + sh);

  //DADOS FIGURA FANTASMA
  fantasma = document.getElementById("fantasma");
  fAltura = fantasma.clientHeight;
  fLargura = fantasma.clientWidth;
  espacoFV = h - fAltura;
  espacoFH = w - fLargura;
  console.log("EspaçoF : " + espacoFH + ":" + espacoFV);

  //DADOS FIGURA PACMAN
  pacman = document.getElementById("pacman");
  pAltura = parseInt(pacman.clientHeight);
  pLargura = parseInt(pacman.clientWidth);
  espacoPV = h - pAltura;
  espacoPH = w - pLargura;
  console.log("EspaçoP : " + espacoPH + ":" + espacoPV);
  moveFantasma();
}

// MOVE O PACMAN ALEATORIAMENTE
function movePacman() {
  //var x = (Math.floor(Math.random() * 60) + 1);
  var posicaoPV = parseInt(Math.floor(Math.random() * espacoPV) + 1);
  var posicaoPH = parseInt(Math.floor(Math.random() * espacoPH) + 1);
  console.log("PacMan: " + posicaoPH + ":" + posicaoPV);
  pacman.style.top = posicaoPV + "px";
  pacman.style.left = posicaoPH + "px";

  testaColisao();
}

// MOVE O FANTASMA ALEATORIAMENTE
function moveFantasma() {
  var posicaoFV = parseInt(Math.floor(Math.random() * espacoFV) + 1);
  var posicaoFH = parseInt(Math.floor(Math.random() * espacoFH) + 1);
  console.log("Fantasma: " + posicaoFH + ":" + posicaoFV);
  fantasma.style.top = posicaoFV + "px";
  fantasma.style.left = posicaoFH + "px";

  testaColisao();
}

function testaColisao() {
  //DECLARANDO PONTOS DO PACMAN PARA VERIFICAR COLISÃO:
  posicaoPV = parseInt(pacman.offsetLeft);
  posicaoPH = parseInt(pacman.offsetTop);
  var p1x = posicaoPH;
  var p1y = posicaoPV;
  console.log("p1-> " + p1x + ":" + p1y);
  var p2x = posicaoPH + pLargura;
  var p2y = posicaoPV;
  console.log("p2->" + p2x + ":" + p2y);
  var p3x = posicaoPH + pLargura;
  var p3y = posicaoPV + pAltura;
  console.log("p3->" + p3x + ":" + p3y);
  var p4x = posicaoPH;
  var p4y = posicaoPV + pAltura;
  console.log("p4->" + p4x + ":" + p4y);

  //DECLARANDO PONTOS DO FANTASMA PARA VERIFICAR COLISÃO:
  posicaoFV = parseInt(fantasma.offsetLeft);
  posicaoFH = parseInt(fantasma.offsetTop);
  var f1x = posicaoFH;
  var f1y = posicaoFV;
  console.log("f1->" + f1x + ":" + f1y);
  var f2x = posicaoFH + fLargura;
  var f2y = posicaoFV;
  console.log("f2->" + f2x + ":" + f2y);
  var f3x = posicaoFH + fLargura;
  var f3y = posicaoFV + fAltura;
  console.log("f3->" + f3x + ":" + f3y);
  var f4x = posicaoFH;
  var f4y = posicaoFV + fAltura;
  console.log("f4->" + f4x + ":" + f4y);

  console.log("_________________");

  //TESTA COLISÃO GERAL:
  if ((p3x >= f1x && p3x <= f2x && p3y >= f1y && p3y <= f4y) ||
      (p4x <= f2x && p4x >= f1x && p4y >= f2y && p4y <= f3y) ||
      (p2x >= f4x && p2x <= f3x && p2y <= f4y && p2y >= f1y) ||
      (p1x <= f3x && p1x >= f4x && p1y <= f3y && p1y >= f2y)) 
    {
      aviso.innerHTML = "_C O L I S Ã O !_";
      fantasma.src="image/fantasmaX.png";
  }
  else {
    aviso.innerHTML = "";
    fantasma.src="image/fantasma.png";
  }

  //TESTA COLISÃO INDIVIDUAL POR PONTOS DO PACMAN:
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