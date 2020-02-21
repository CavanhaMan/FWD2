//Rodrigo Cavanhaman

function trocarPag(num){
    document.getElementById("botoes").src="img/buttons"+num+".png";
    document.getElementById("legenda").innerHTML=document.getElementById("leg"+num).innerHTML;
}