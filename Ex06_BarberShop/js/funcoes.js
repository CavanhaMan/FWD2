//Rodrigo Cavanhaman

function trocarImg(num){
    document.getElementById("barber").src="img/barbearia"+num+".jpg";
    document.getElementById("botoes").src="img/buttons"+num+".png";
    document.getElementById("icones").src="img/icone"+num+".png";
    document.getElementById("textoleg").innerHTML=document.getElementById("leg"+num).innerHTML;
}