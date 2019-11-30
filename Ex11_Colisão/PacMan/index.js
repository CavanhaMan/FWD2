var campoX = document.getElementById("vrX");
var campoY = document.getElementById("vrY");
window.onLoad = imgPacman();

function imgPacman() {
  w = window.innerWidth;
  h = window.innerHeight;
  console.log("Janela: "+w+":"+h);

  var sh = screen.height;
  var sw = screen.width;
  console.log("Monitor: "+sw+":"+sh);

  //DADOS FIGURA FANTASMA
  fantasma = document.getElementById("fantasma");
  fAltura = fantasma.clientHeight;
  fLargura = fantasma.clientWidth;
  espacoFV = h - fAltura;
  espacoFH = w - fLargura;
  
  //DADOS FIGURA PACMAN
  pacman = document.getElementById("pacman");
  pAltura = parseInt(pacman.clientHeight);
  pLargura = parseInt(pacman.clientWidth);
  espacoPV = h - pAltura -100;
  espacoPH = w - pLargura -100;
  
  moveFantasma();
}

// MOVE O PACMAN ALEATORIAMENTE
function movePacman() {
  //var x = (Math.floor(Math.random() * 60) + 1);
  var posicaoPV = parseInt(Math.floor(Math.random() * espacoPV +1));
  var posicaoPH = parseInt(Math.floor(Math.random() * espacoPH +1));
  pacman.style.top = posicaoPH + "px";
  pacman.style.left = posicaoPV + "px";
  campoX.value=posicaoPV;
  campoY.value=posicaoPH;

  testaColisao();
}

// MOVE O FANTASMA ALEATORIAMENTE
function moveFantasma() {
  var posicaoFV = Math.round(Math.random() * espacoFV);
  var posicaoFH = Math.round(Math.random() * espacoFH);
  console.log("Fantasma: "+posicaoFV+":"+posicaoFH);
  fantasma.style.top = posicaoFH + "px";
  fantasma.style.left = posicaoFV + "px";
  campoX.value=posicaoFV;
  campoY.value=posicaoFH;

  testaColisao();
}

// MOVE O PACMAN PARA COORDENADAS ESPECÍFICAS INFORMADAS
function movePacmanXY() {
  var posicaoPV = parseInt(campoX.value);
  var posicaoPH = parseInt(campoY.value);
  console.log("Espaço : "+espacoPV+":"+espacoPH);
  if (posicaoPV=="" || posicaoPH=="")
	  alert("Erro! Favor informar um valor!");
  else if (posicaoPV<1 || posicaoPH<1)
	  alert("Erro! Favor informar um valor positivo!");
  else if (posicaoPV>espacoPV || posicaoPH>espacoPH)
	  alert("Erro! Valores fora do tamanho da tela!");
  else{
    console.log("PacMan: "+posicaoPV+":"+posicaoPH);
	  pacman.style.top = posicaoPH + "px";
	  pacman.style.left = posicaoPV + "px";
	  campoX.value=posicaoPV;
      campoY.value=posicaoPH;
  }
  //CHAMA O TESTE DE COLISÃO
  testaColisao();
}

function testaColisao(){
  //DECLARANDO PONTOS DO PACMAN PARA VERIFICAR COLISÃO:
  posicaoPV = parseInt(pacman.offsetLeft);
  posicaoPH = parseInt(pacman.offsetTop);
  var p1x = posicaoPV;
  var p1y = posicaoPH;
  console.log("p1-> "+p1x+":"+p1y);
  var p2x = posicaoPV + pLargura;
  var p2y = posicaoPH;
  console.log("p2->"+p2x+":"+p2y);
  var p3x = posicaoPV + pAltura;
  var p3y = posicaoPH + pLargura;
  console.log("p3->"+p3x+":"+p3y);
  var p4x = posicaoPV;
  var p4y = posicaoPH + pAltura;
  console.log("p4->"+p4x+":"+p4y);

  //DECLARANDO PONTOS DO FANTASMA PARA VERIFICAR COLISÃO:
  posicaoFV = parseInt(fantasma.offsetLeft);
  posicaoFH = parseInt(fantasma.offsetTop);
  var f1x = posicaoFV;
  var f1y = posicaoFH;
  console.log("f1->"+f1x+":"+f1y);
  var f2x = posicaoFV + fLargura;
  var f2y = posicaoFH;
  console.log("f2->"+f2x+":"+f2y);
  var f3x = posicaoFV + fAltura;
  var f3y = posicaoFH + fLargura;
  console.log("f3->"+f3x+":"+f3y);
  var f4x = posicaoFV;
  var f4y = posicaoFH + fAltura;
  console.log("f4->"+f4x+":"+f4y);

  console.log("_________________");

  //TESTA COLISÃO GERAL:
  if((p3x>=f1x && p3x<=f2x && p3y>=f1y && p3y<=f4y) || 
     (p4x<=f2x && p4x>=f1x && p4y>=f2y && p4y<=f3y) || 
     (p2x>=f4x && p2x<=f3x && p2y<=f4y && p2y>=f1y) || 
     (p1x<=f3x && p1x>=f4x && p1y<=f3y && p1y>=f2y)) alert("COLISÃO!");

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