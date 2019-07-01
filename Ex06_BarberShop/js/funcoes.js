//Rodrigo Cavanhaman

function trocarImg(imagem,nome,botao){
    document.getElementById("imgCurso").src="img/barbearia"+imagem+".jpg";
    document.getElementById("legenda").innerHTML=nome;
    document.getElementById("botoes").src="img/buttons"+botao+".png";
}