$('.campo').on('focus blur', function() {
    $(this).toggleClass("inputfocus");
});

/***LETRA A*******************************************************************/
document.getElementById("txtA").onfocus = function() {
    document.getElementById("ValidaA").checked=false;
    document.getElementById("mensagemA").innerHTML="";
}
document.getElementById("ValidaA").onclick = function() {
    var dadoA = document.getElementById("txtA").value;
    var padraoA = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
    if (padraoA.test(dadoA)){
        document.getElementById("mensagemA").innerHTML=" = Válido!";
        document.getElementById("mensagemA").style.backgroundColor = "white";
    }
    else{
        document.getElementById("mensagemA").innerHTML=" = Inválido!";
        document.getElementById("mensagemA").style.backgroundColor = "red";
    }
};
/***LETRA B*******************************************************************/
document.getElementById("txtB").onfocus = function() {
    document.getElementById("ValidaB").checked=false;
    document.getElementById("mensagemB").innerHTML="";
}
document.getElementById("ValidaB").onclick = function() {
    var dadoB = document.getElementById("txtB").value;
    var padraoB = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    if (padraoB.test(dadoB)){
        document.getElementById("mensagemB").innerHTML=" = Válido!";
        document.getElementById("mensagemB").style.backgroundColor = "white";
    }
    else{
        document.getElementById("mensagemB").innerHTML=" = Inválido!";
        document.getElementById("mensagemB").style.backgroundColor = "red";
    }
};
/***LETRA C*******************************************************************/
/***LETRA D*******************************************************************/
/***LETRA E*******************************************************************/
/***LETRA F*******************************************************************/
/***LETRA G*******************************************************************/
/***LETRA H*******************************************************************/
/***LETRA I*******************************************************************/
/***LETRA J*******************************************************************/
/***LETRA K*******************************************************************/
/***LETRA L*******************************************************************/
