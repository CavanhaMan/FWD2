//Rodrigo Cavanhaman

function trocarImg(nImg,novaLegenda,corLegenda){
    document.getElementById("imgCurso").src="img/beardpc_"+nImg+".jpg";
    document.getElementById("legenda").innerHTML="Estrela " + novaLegenda;
    document.getElementById("legenda").style.color=corLegenda;
}