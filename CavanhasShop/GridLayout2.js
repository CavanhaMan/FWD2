function trocarImg1(num){
    document.getElementById("fotoproduto").src="img/bosch0"+num+".png";
}
function trocarImg2(num){
    document.getElementById("fotoproduto").src="img/bosch1"+num+".png";
}

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

