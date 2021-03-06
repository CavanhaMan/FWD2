/* Rodrigo CavanhaMan */
var auxV=14;
var auxH=280;
/*************************************************/
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
var telaJogo = document.getElementById("jogo");
var campoX = document.getElementById("vrX");
var campoY = document.getElementById("vrY");
window.onLoad = imgPacman();
var h;
var w;

function imgPacman() {
  w = parseInt(telaJogo.offsetWidth);
  h = parseInt(telaJogo.offsetHeight);
  console.log("TelaJogo: " + w + ":" + h);

  var sh = screen.height;
  var sw = screen.width;
  console.log("Monitor: " + sw + ":" + sh);

  //DADOS FIGURA FANTASMA
  fantasma = document.getElementById("fantasma");
  fAltura = parseInt(fantasma.clientHeight);
  fLargura = parseInt(fantasma.clientWidth);
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
  var posicaoPV = parseInt(Math.floor(Math.random() * espacoPV) + auxV);
  var posicaoPH = parseInt(Math.floor(Math.random() * espacoPH) + auxH);
  console.log("PacMan: " + posicaoPH + ":" + posicaoPV);
  pacman.style.top = posicaoPV + "px";
  pacman.style.left = posicaoPH + "px";
  campoX.value = posicaoPV;
  campoY.value = posicaoPH;

  testaColisao();
}

// BOTOES PARA MOVER ALEATORIAMENTE:
var moveauto = document.getElementById("moveauto");
var paraauto = document.getElementById("paraauto");
var moveTauto = document.getElementById("moveTauto");
var paraTauto = document.getElementById("paraTauto");
// MOVE O PACMAN ALEATORIAMENTE AUTOMATICAMENTE A CADA MEIO SEGUNDO
var movePacA;
function movePacAuto(){
  movePacA = setInterval(movePacman, 500);
  moveauto.disabled = true;
  paraauto.disabled = false;
  moveTauto.disabled = true;
  paraTauto.disabled = true;
}
// INTERROMPE O AUTOMATICO (VIA BOTAO OU QUANDO DER COLISÃO)
function stopPacAuto(){
  clearInterval(movePacA);
  moveauto.disabled = false;
  paraauto.disabled = true;
  moveTauto.disabled = false;
  paraTauto.disabled = true;
}
// MOVE TODOS ALEATORIAMENTE AUTOMATICAMENTE A CADA MEIO SEGUNDO
var moveFanA;
function moveTodosAuto(){
  movePacAuto();
  moveFanA = setInterval(moveFantasma, 500);
  moveauto.disabled = true;
  paraauto.disabled =true;
  moveTauto.disabled = true;
  paraTauto.disabled = false;
}
// INTERROMPE O AUTOMATICO (VIA BOTAO OU QUANDO DER COLISÃO)
function stopTodosAuto(){
  clearInterval(moveFanA);
  clearInterval(movePacA);
  moveauto.disabled = false;
  paraauto.disabled = true;
  moveTauto.disabled = false;
  paraTauto.disabled = true;
}


// MOVE O FANTASMA ALEATORIAMENTE
function moveFantasma() {
  var posicaoFV = parseInt(Math.floor(Math.random() * espacoFV) + auxV);
  var posicaoFH = parseInt(Math.floor(Math.random() * espacoFH) + auxH);
  console.log("Fantasma: " + posicaoFH + ":" + posicaoFV);
  fantasma.style.top = posicaoFV + "px";
  fantasma.style.left = posicaoFH + "px";
  campoX.value = posicaoFV;
  campoY.value = posicaoFH;

  testaColisao();
}

// MOVE O PACMAN PARA COORDENADAS ESPECÍFICAS INFORMADAS
function movePacmanXY() {
  var posicaoPV = parseInt(campoX.value);
  var posicaoPH = parseInt(campoY.value);
  if (posicaoPV == "" || posicaoPH == "")
    alert("Erro! Favor informar um valor!");
  else if (posicaoPV < 1 || posicaoPH < 1)
    alert("Erro! Favor informar um valor positivo!");
  else if (posicaoPV > espacoPV || posicaoPH > espacoPH)
    alert("Erro! Valores fora do tamanho da tela!");
  else {
    console.log("PacMan: " + posicaoPV + ":" + posicaoPH);
    pacman.style.top = (posicaoPV+auxV) + "px";
    pacman.style.left = (posicaoPH+auxH) + "px";
    campoX.value = posicaoPV;
    campoY.value = posicaoPH;
  }
  //CHAMA O TESTE DE COLISÃO
  testaColisao();
}

function testaColisao() {
  //DECLARANDO PONTOS DO PACMAN PARA VERIFICAR COLISÃO:
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

  //TESTA COLISÃO GERAL:
  if ((p3x >= f1x && p3x <= f2x && p3y >= f1y && p3y <= f4y) ||
      (p4x <= f2x && p4x >= f1x && p4y >= f2y && p4y <= f3y) ||
      (p2x >= f4x && p2x <= f3x && p2y <= f4y && p2y >= f1y) ||
      (p1x <= f3x && p1x >= f4x && p1y <= f3y && p1y >= f2y)) 
    {
      aviso.innerHTML = "C O L I S Ã O !";
      fantasma.src="fantasmaX.png";
      stopPacAuto();
      stopTodosAuto();
  }
  else {
    aviso.innerHTML = "";
    fantasma.src="fantasma.png";
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