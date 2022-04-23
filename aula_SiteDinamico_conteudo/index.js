/*function trocanoticia(num){
    document.getElementById("noticia").src="noticia/n1.txt";
}*/

function trocanoticia(num){
    document.getElementById("fotof").src="fotos/f" + num + ".png";
    document.getElementById("titulot").src="titulos/t" + num + ".html";
    document.getElementById("notician").src="noticias/n" + num + ".html";
}
var x = document.getElementById("testaconsole").innerHTML;
console.log(x);

var y = $("#testaconsole").text();
console.log(y);