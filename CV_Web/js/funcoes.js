//Rodrigo Cavanhaman

function trocarPag(num){
    document.getElementById("barber").src="conteudo/curric"+num+".html";
    document.getElementById("botoes").src="img/buttons"+num+".png";
    document.getElementById("legenda").innerHTML=document.getElementById("leg"+num).innerHTML;
}