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
    var padraoD = /^MT-\d{2}\.\d{3}-IFTM$/i;
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
//as letras MT deverão ser maiúsculas e 
//as letras IFTM poderão ser tanto maiúsculas quanto minúsculas.
document.getElementById("txtE").onfocus = function() {
    document.getElementById("validaE").checked=false;
    document.getElementById("mensagemE").innerHTML="";
}
document.getElementById("validaE").onclick = function() {
    var dadoE = document.getElementById("txtE").value;
    var padraoE = /^MT-\d{2}\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;
    if (padraoE.test(dadoE)){
        document.getElementById("mensagemE").innerHTML=" = Válido!";
        document.getElementById("mensagemE").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemE").innerHTML=" = Inválido!";
        document.getElementById("mensagemE").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA F*******************************************************************/
//Único formato permitido: MT-xx.xxx-IFTM. Onde x é um dígito e 
//as letras do padrão poderão ser tanto maiúsculas quanto minúsculas
//e entre as letras poderá haver no máximo um espaço em branco.
//M ?T I ?F ?T ?M
document.getElementById("txtF").onfocus = function() {
    document.getElementById("validaF").checked=false;
    document.getElementById("mensagemF").innerHTML="";
}
document.getElementById("validaF").onclick = function() {
    var dadoF = document.getElementById("txtF").value;
    var padraoF = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M$/i;
    if (padraoF.test(dadoF)){
        document.getElementById("mensagemF").innerHTML=" = Válido!";
        document.getElementById("mensagemF").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemF").innerHTML=" = Inválido!";
        document.getElementById("mensagemF").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA G*******************************************************************/
//Único formato permitido: MT-xx.xxx-IFTM Y. Onde x é um dígito, 
//as letras do padrão poderão ser tanto maiúsculas quanto minúsculas 
//e entre as letras poderá haver no máximo um espaço em branco 
//e Y é o nome de um dos seguintes campi UBERLÂNDIA CENTRO ou UBERLÂNDIA
//(A primeira letra do nome/sobrenome de cada campus deve ser maiúscula e as demais minúsculas).
document.getElementById("txtG").onfocus = function() {
    document.getElementById("validaG").checked=false;
    document.getElementById("mensagemG").innerHTML="";
}
document.getElementById("validaG").onclick = function() {
    var dadoG = document.getElementById("txtG").value;
    var padraoG = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M Uberlândia( Centro)?$/i;
    if (padraoG.test(dadoG)){
        document.getElementById("mensagemG").innerHTML=" = Válido!";
        document.getElementById("mensagemG").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemG").innerHTML=" = Inválido!";
        document.getElementById("mensagemG").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA H*******************************************************************/
//Único formato permitido: +yy(xx)xxxxx-xxxx. Onde x e y são dígitos. 
//O y refere ao código internacional do país (DDI).
document.getElementById("txtH").onfocus = function() {
    document.getElementById("validaH").checked=false;
    document.getElementById("mensagemH").innerHTML="";
}
document.getElementById("validaH").onclick = function() {
    var dadoH = document.getElementById("txtH").value;
    var padraoH = /^\+\d{1,3}\(\d{2}\)\d{5}-\d{4}$/;
    if (padraoH.test(dadoH)){
        document.getElementById("mensagemH").innerHTML=" = Válido!";
        document.getElementById("mensagemH").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemH").innerHTML=" = Inválido!";
        document.getElementById("mensagemH").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA I*******************************************************************/
//Únicos formatos permitidos: (xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx
document.getElementById("txtI").onfocus = function() {
    document.getElementById("validaI").checked=false;
    document.getElementById("mensagemI").innerHTML="";
}
document.getElementById("validaI").onclick = function() {
    var dadoI = document.getElementById("txtI").value;
    var padraoI = /^\(\d{2,3}\)\d{5}-\d{4}$/;
    if (padraoI.test(dadoI)){
        document.getElementById("mensagemI").innerHTML=" = Válido!";
        document.getElementById("mensagemI").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemI").innerHTML=" = Inválido!";
        document.getElementById("mensagemI").style.backgroundColor = "#ffb3b3";
    }
};
/***LETRA J*******************************************************************/
//O faturamento de uma empresa pode variar de R$0,00 até R$999.999.999.999,99 (999 bilhões de reais).
//Exemplos: R$400,8; R$400,85; R$1.500,41; R$1.500,7; R$5.601.478,10; R$10.524.478.967,70
document.getElementById("txtJ").onfocus = function() {
    document.getElementById("validaJ").checked=false;
    document.getElementById("mensagemJ").innerHTML="";
}
document.getElementById("validaJ").onclick = function() {
    var dadoJ = document.getElementById("txtJ").value;
    //var padraoJ = /^R\$\d{1,3}(\.\d{3})*,\d{2}$/; //qq valor
    var padraoJ = /^R\$\d{1,3}(\.\d{3}){0,3},\d{2}$/;//até 999 bilhoes
    if (padraoJ.test(dadoJ)){
        document.getElementById("mensagemJ").innerHTML=" = Válido!";
        document.getElementById("mensagemJ").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemJ").innerHTML=" = Inválido!";
        document.getElementById("mensagemJ").style.backgroundColor = "#ffb3b3";
    }
};
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
document.getElementById("txtK").onfocus = function() {
    document.getElementById("validaK").checked=false;
    document.getElementById("mensagemK").innerHTML="";
}
document.getElementById("validaK").onclick = function() {
    var dadoK = document.getElementById("txtK").value;
    var padraoK = /^R\$\d{1,3}(\.\d{3}){0,3},\d{2}$/;//até 999 bilhoes
    if (padraoK.test(dadoK)){
        document.getElementById("mensagemK").innerHTML=" = Válido!";
        document.getElementById("mensagemK").style.backgroundColor = "#99ff99";
    }
    else{
        document.getElementById("mensagemK").innerHTML=" = Inválido!";
        document.getElementById("mensagemK").style.backgroundColor = "#ffb3b3";
    }
};
