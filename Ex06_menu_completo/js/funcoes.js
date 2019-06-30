//Rodrigo Cavanhaman

function trocarImg(curso,nome){
    document.getElementById("imgCurso").src="img/beardpc_"+curso+".jpg";
    document.getElementById("legenda").innerHTML=nome;
}