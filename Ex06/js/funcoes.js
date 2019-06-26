//Rodrigo Cavanhaman

function trocarImg(nImg,novaLegenda,corLegenda){
    document.getElementById("imgStar").src="img/star"+nImg+".png";
    document.getElementById("legenda").innerHTML="Estrela " + novaLegenda;
    document.getElementById("legenda").style.color=corLegenda;
}