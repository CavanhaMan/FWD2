//Rodrigo Cavanhaman

function trocarImg(num){
    document.getElementById("barber").src="img/barbearia"+num+".jpg";
    document.getElementById("botoes").src="img/buttons"+num+".png";
    document.getElementById("legenda").innerHTML=document.getElementById("leg"+num).innerHTML;
}