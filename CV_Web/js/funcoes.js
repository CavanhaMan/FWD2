//Rodrigo Cavanhaman

function trocarPag(num) {
    document.getElementById("botoes").src = "img/buttons" + num + ".png";
    document.getElementById("legenda").innerHTML = document.getElementById("leg" + num).innerHTML;
}

/*$('#bt1').click(function(e){
    $("#framehtml").attr("src", "lembrar.html");
    $(this).css("background-color", "blue");
});*/

function trocarConteudo(num) {
    $("#framehtml").attr("src", "conteudo/curric" + num + ".html");
}
