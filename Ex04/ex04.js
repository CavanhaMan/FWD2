$('.campo').on('focus blur', function() {
    $(this).toggleClass("inputfocus");
});

/***LETRA A*******************************************************************/
//Únicos formatos permitidos: dd/mm/aaaa ou dd/mm/aa
document.getElementById("txtA").onfocus = function() {
    document.getElementById("validaA").checked=false;
    document.getElementById("mensagemA").innerHTML="";
}
document.getElementById("validaA").onclick = function() {
    var dadoA = document.getElementById("txtA").value;
    //var padrao5 = /^[2-4][0-9]|5[0-4]$/;
    //var padraoA = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
    var padraoA = /^([0-2]?[0-9]|3[0-1])\/(0?[0-9]|1[0-2])\/((19[0-9][0-9]|20?(0|1)[0-9])|[0-9][0-9])$/;
    if (padraoA.test(dadoA)){
        document.getElementById("mensagemA").innerHTML=" = Válido!";
        document.getElementById("mensagemA").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemA").innerHTML=" = Inválido!";
        document.getElementById("mensagemA").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA B*******************************************************************/
//Únicos formatos permitidos: xxx.xxx.xxx-xx. Onde x é um dígito.
document.getElementById("txtB").onfocus = function() {
    document.getElementById("validaB").checked=false;
    document.getElementById("mensagemB").innerHTML="";
}
document.getElementById("validaB").onclick = function() {
    var dadoB = document.getElementById("txtB").value;
    var padraoB = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    if (padraoB.test(dadoB)){
        document.getElementById("mensagemB").innerHTML=" = Válido!";
        document.getElementById("mensagemB").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemB").innerHTML=" = Inválido!";
        document.getElementById("mensagemB").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA C*******************************************************************/
//Únicos formatos permitidos: IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy. Onde x é um dígito e y um caracter alfanumérico.
document.getElementById("txtC").onfocus = function() {
    document.getElementById("validaC").checked=false;
    document.getElementById("mensagemC").innerHTML="";
}
document.getElementById("validaC").onclick = function() {
    var dadoC = document.getElementById("txtC").value;
    var padraoC = /^IFTM-\d{3}\/\d{3}-\w{2}$/i;
    if (padraoC.test(dadoC)){
        document.getElementById("mensagemC").innerHTML=" = Válido!";
        document.getElementById("mensagemC").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemC").innerHTML=" = Inválido!";
        document.getElementById("mensagemC").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA D*******************************************************************/
//Único formato permitido: MT-xx.xxx-IFTM. Onde x é um dígito e 
//as letras do padrão poderão ser tanto maiúsculas quanto minúsculas.
document.getElementById("txtD").onfocus = function() {
    document.getElementById("validaD").checked=false;
    document.getElementById("mensagemD").innerHTML="";
}
document.getElementById("validaD").onclick = function() {
    var dadoD = document.getElementById("txtD").value;
    var padraoD = /^MT-\d{2}.\d{3}-IFTM$/i;
    if (padraoD.test(dadoD)){
        document.getElementById("mensagemD").innerHTML=" = Válido!";
        document.getElementById("mensagemD").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemD").innerHTML=" = Inválido!";
        document.getElementById("mensagemD").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA E*******************************************************************/
//Único formato permitido: MT-xx.xxx-IFTM. Onde x deverá um dígito, 
//as letras MT deverão ser maiúsculas e as letras IFTM poderão ser 
//tanto maiúsculas quanto minúsculas.
/***LETRA F*******************************************************************/
//Único formato permitido: MT-xx.xxx-IFTM. Onde x é um dígito e 
//as letras do padrão poderão ser tanto maiúsculas quanto minúsculas
//e entre as letras poderá haver no máximo um espaço em branco.
//M ?T I ?F ?T ?M
/***LETRA G*******************************************************************/
//Único formato permitido: MT-xx.xxx-IFTM Y. Onde x é um dígito, 
//as letras do padrão poderão ser tanto maiúsculas quanto minúsculas 
//e entre as letras poderá haver no máximo um espaço em branco 
//e Y é o nome de um dos seguintes campi UBERLÂNDIA CENTRO ou UBERLÂNDIA
//(A primeira letra do nome/sobrenome de cada campus deve ser maiúscula e as demais minúsculas).
/***LETRA H*******************************************************************/
//Único formato permitido: +yy(xx)xxxxx-xxxx. Onde x e y são dígitos. 
//O y refere ao código internacional do país (DDI).
/***LETRA I*******************************************************************/
//Únicos formatos permitidos: (xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx
/***LETRA J*******************************************************************/
//O faturamento de uma empresa pode variar de R$0,00 até R$999.999.999.999,99 (999 bilhões de reais).
//Exemplos: R$400,8; R$400,85; R$1.500,41; R$1.500,7; R$5.601.478,10; R$10.524.478.967,70
/***LETRA K*******************************************************************/
//HH:MM:SS:CC (HH: hora, MM: minuto, SS: segundo, CC: centésimo de segundo).
//Valores permitidos para cada unidade de tempo: (HH>=00 && HH<=23), 
//(MM>=00 && MM<=59), (SS>=00 && SS<=59) e (CC>=00 && CC<=99)
/***LETRA L*******************************************************************/
//Únicos formatos permitidos: X&W.Y.Z-U,V.T ou X&W.Y-U,V.T Onde X deverá ser
//no mínimo 5 (cinco) caracteres alfanuméricos, além de um dos seguintes símbolos (“.”, “-”,”_”), 
//W deverá ser apenas letras maiúsculas ou minúsculas de "a" a "p" (pelo menos 1), 
//Y apenas vogais minúsculas (pelo menos 1), 
//Z apenas letras maiúsculas ou minúsculas e/ou números de 0 a 5 (opcional), 
//U deverá ser caracteres diferentes de números (pelo menos 1), 
//V deverá ser 2 caracteres especiais e 
//T qualquer caracter exceto 'a','b','0' e '1' (pelo menos 1)
//Exemplo: 321a.&apMb.aei.Ab0-asf+_,/*.cq
