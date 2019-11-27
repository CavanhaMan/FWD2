var w = window.innerHeight;
console.log("altura tela: "+w)
var h = window.innerWidth;
console.log("altura tela: "+h)

var topo = parseInt(Math.random() * (w - 100));
console.log("topo: "+topo);
var lado = parseInt(Math.random() * (h - 100));
console.log("lado: "+lado);

//CRIANDO IMAGEM PACMAN
var img1 = document.createElement('img');
img1.src = 'pacman6b.gif';
img1.id = 'pacman';

img1.setAttribute('top',topo);
img1.setAttribute('left',lado);

document.getElementById('header').appendChild(img1)
var pacman = document.getElementById("pacman");
console.log(pacman);
var objPacman = pacman.getBoundingClientRect();
console.log(objPacman);

pacman.style.top = topo+"px";
pacman.style.left = lado+"px";


//CRIANDO IMAGEM FANTASMA
var img2 = document.createElement('img');
img2.src = 'fantasma1.png';
img2.id = 'fantasma';
document.getElementById('header').appendChild(img2)
var fantasma = document.getElementById("fantasma");
console.log(fantasma);
var objFantasma = fantasma.getBoundingClientRect();
console.log(objFantasma);


/*var larguraPac = pacman.clientWidth;
console.log("largura: "+larguraPac);
var alturaPac = pacman.clientHeight;
console.log("altura: "+alturaPac);*/

//var css = 'position:absolute; top:400px; left:${left}px; border:1px solid red;';
//pacman.setAttribute("style",css);
//pacman.style = css;
//document.getElementsByTagName("body")[0].appendChild(pacman); 
