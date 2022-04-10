function trocarImg1(num){
    document.getElementById("fotoproduto").src="img/bosch0"+num+".png";
}
function trocarImg2(num){
    document.getElementById("fotoproduto").src="img/bosch1"+num+".png";
}

/** BOTAO-SETINHAS PASSAR PROXIMAS FOTOS ***************************/
$(document).ready(function(){
    $("#btprox").click(function(){
        $("#boxant").hide();
        $("#boxprox").show();
    });
    $("#btant").click(function(){
        $("#boxprox").hide();
        $("#boxant").show();
    });
  });

/** BOTAO COMPRAR E ADDICIONAR AO CARRINHO ***************************/
$(document).ready(function(){
    $("#comprar").click(function(){
        alert("\nVoce comprou!\n\nObrigado!");
    });

    $("#addcarrinho").click(function(){
        console.log("adicionando ao carrinho:")
        var qtd = $("select.quant").children("option:selected").val();;
        console.log("qtd="+qtd);
        $("#numcarrinho").text(qtd);
    });
});