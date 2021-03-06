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
	if (document.getElementById("validaA").checked==false){
		document.getElementById("validaA").checked=false;
		document.getElementById("mensagemA").innerHTML="";
	}
	else{
		document.getElementById("validaA").checked=true;
		var dadoA = document.getElementById("txtA").value;
		//var padrao5 = /^[2-4][0-9]|5[0-4]$/;
		//var padraoA = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
		var padraoA = /^([0-2]?[0-9]|3[0-1])\/(0?[0-9]|1[0-2])\/((19[0-9][0-9]|20?(0|1)[0-9])|[0-9][0-9])$/;
		if (padraoA.test(dadoA)){
			document.getElementById("mensagemA").innerHTML=" = Válido!";
			document.getElementById("mensagemA").classList=("mensagem valido");
		}
		else{
			document.getElementById("mensagemA").innerHTML=" = Inválido!";
			document.getElementById("mensagemA").classList=("mensagem invalido");
		}
	}
};
/***LETRA B*******************************************************************/
//Únicos formatos permitidos: xxx.xxx.xxx-xx. Onde x é um dígito.
document.getElementById("txtB").onfocus = function() {
    document.getElementById("validaB").checked=false;
    document.getElementById("mensagemB").innerHTML="";
}
document.getElementById("validaB").onclick = function() {
	if (document.getElementById("validaB").checked==false){
		document.getElementById("validaB").checked=false;
		document.getElementById("mensagemB").innerHTML="";
	}
	else{
		var dadoB = document.getElementById("txtB").value;
		var padraoB = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
		if (padraoB.test(dadoB)){
			document.getElementById("mensagemB").innerHTML=" = Válido!";
			document.getElementById("mensagemB").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemB").innerHTML=" = Inválido!";
			document.getElementById("mensagemB").style.backgroundColor = "red";
		}
	}
};
/***LETRA C*******************************************************************/
//Únicos formatos permitidos: IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy. Onde x é um dígito e y um caracter alfanumérico.
document.getElementById("txtC").onfocus = function() {
    document.getElementById("validaC").checked=false;
    document.getElementById("mensagemC").innerHTML="";
}
document.getElementById("validaC").onclick = function() {
	if (document.getElementById("validaC").checked==false){
		document.getElementById("validaC").checked=false;
		document.getElementById("mensagemC").innerHTML="";
	}
	else{
		var dadoC = document.getElementById("txtC").value;
		var padraoC = /^IFTM-\d{3}\/\d{3}-\w{2}$/i;
		if (padraoC.test(dadoC)){
			document.getElementById("mensagemC").innerHTML=" = Válido!";
			document.getElementById("mensagemC").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemC").innerHTML=" = Inválido!";
			document.getElementById("mensagemC").style.backgroundColor = "red";
		}
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
	if (document.getElementById("validaD").checked==false){
		document.getElementById("validaD").checked=false;
		document.getElementById("mensagemD").innerHTML="";
	}
	else{
		var dadoD = document.getElementById("txtD").value;
		var padraoD = /^MT-\d{2}\.\d{3}-IFTM$/i;
		if (padraoD.test(dadoD)){
			document.getElementById("mensagemD").innerHTML=" = Válido!";
			document.getElementById("mensagemD").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemD").innerHTML=" = Inválido!";
			document.getElementById("mensagemD").style.backgroundColor = "red";
		}
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
	if (document.getElementById("validaE").checked==false){
		document.getElementById("validaE").checked=false;
		document.getElementById("mensagemE").innerHTML="";
	}
	else{
		var dadoE = document.getElementById("txtE").value;
		var padraoE = /^MT-\d{2}\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;
		if (padraoE.test(dadoE)){
			document.getElementById("mensagemE").innerHTML=" = Válido!";
			document.getElementById("mensagemE").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemE").innerHTML=" = Inválido!";
			document.getElementById("mensagemE").style.backgroundColor = "red";
		}
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
	if (document.getElementById("validaF").checked==false){
		document.getElementById("validaF").checked=false;
		document.getElementById("mensagemF").innerHTML="";
	}
	else{
		var dadoF = document.getElementById("txtF").value;
		var padraoF = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M$/i;
		if (padraoF.test(dadoF)){
			document.getElementById("mensagemF").innerHTML=" = Válido!";
			document.getElementById("mensagemF").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemF").innerHTML=" = Inválido!";
			document.getElementById("mensagemF").style.backgroundColor = "red";
		}
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
	if (document.getElementById("validaG").checked==false){
		document.getElementById("validaG").checked=false;
		document.getElementById("mensagemG").innerHTML="";
	}
	else{
		var dadoG = document.getElementById("txtG").value;
		var padraoG = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M Uberlândia( Centro)?$/i;
		if (padraoG.test(dadoG)){
			document.getElementById("mensagemG").innerHTML=" = Válido!";
			document.getElementById("mensagemG").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemG").innerHTML=" = Inválido!";
			document.getElementById("mensagemG").style.backgroundColor = "red";
		}
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
	if (document.getElementById("validaH").checked==false){
		document.getElementById("validaH").checked=false;
		document.getElementById("mensagemH").innerHTML="";
	}
	else{
		var dadoH = document.getElementById("txtH").value;
		var padraoH = /^\+\d{1,3}\(\d{2}\)\d{5}-\d{4}$/;
		if (padraoH.test(dadoH)){
			document.getElementById("mensagemH").innerHTML=" = Válido!";
			document.getElementById("mensagemH").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemH").innerHTML=" = Inválido!";
			document.getElementById("mensagemH").style.backgroundColor = "red";
		}
	}
};
/***LETRA I*******************************************************************/
//Únicos formatos permitidos: (xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx
document.getElementById("txtI").onfocus = function() {
    document.getElementById("validaI").checked=false;
    document.getElementById("mensagemI").innerHTML="";
}
document.getElementById("validaI").onclick = function() {
	if (document.getElementById("validaI").checked==false){
		document.getElementById("validaI").checked=false;
		document.getElementById("mensagemI").innerHTML="";
	}
	else{
		var dadoI = document.getElementById("txtI").value;
		var padraoI = /^\(\d{2,3}\)\d{5}-\d{4}$/;
		if (padraoI.test(dadoI)){
			document.getElementById("mensagemI").innerHTML=" = Válido!";
			document.getElementById("mensagemI").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemI").innerHTML=" = Inválido!";
			document.getElementById("mensagemI").style.backgroundColor = "red";
		}
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
	if (document.getElementById("validaJ").checked==false){
		document.getElementById("validaJ").checked=false;
		document.getElementById("mensagemJ").innerHTML="";
	}
	else{
		var dadoJ = document.getElementById("txtJ").value;
		//var padraoJ = /^R\$\d{1,3}(\.\d{3})*,\d{2}$/; //qq valor
		var padraoJ = /^R\$\d{0,3}(\.\d{3}){0,3},\d{1,2}$/;//até 999 bilhoes
		if (padraoJ.test(dadoJ)){
			document.getElementById("mensagemJ").innerHTML=" = Válido!";
			document.getElementById("mensagemJ").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemJ").innerHTML=" = Inválido!";
			document.getElementById("mensagemJ").style.backgroundColor = "red";
		}
	}
};
/***LETRA K*******************************************************************/
//HH:MM:SS:CC (HH: hora, MM: minuto, SS: segundo, CC: centésimo de segundo).
//Valores permitidos para cada unidade de tempo: (HH>=00 && HH<=23), 
//(MM>=00 && MM<=59), (SS>=00 && SS<=59) e (CC>=00 && CC<=99)
document.getElementById("txtK").onfocus = function() {
    document.getElementById("validaK").checked=false;
    document.getElementById("mensagemK").innerHTML="";
}
document.getElementById("validaK").onclick = function() {
	if (document.getElementById("validaK").checked==false){
		document.getElementById("validaK").checked=false;
		document.getElementById("mensagemK").innerHTML="";
	}
	else{
		var dadoK = document.getElementById("txtK").value;
		var padraoK = /^([0-1][0-9]|2[0-3])(:([0-5][0-9])){2}:([0-9][0-9])$/;
		if (padraoK.test(dadoK)){
			document.getElementById("mensagemK").innerHTML=" = Válido!";
			document.getElementById("mensagemK").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemK").innerHTML=" = Inválido!";
			document.getElementById("mensagemK").style.backgroundColor = "red";
		}
	}
};
/***LETRA L*******************************************************************/
//Únicos formatos permitidos: X&W.Y.Z-U,V.T ou X&W.Y-U,V.T 
//Onde X deverá ser no mínimo 5 (cinco) caracteres alfanuméricos,
//além de um dos seguintes símbolos (“.”, “-”,”_”), 
var X = /^[\w\.\_\-]{5,}$/;
//W deverá ser apenas letras maiúsculas ou minúsculas de "a" a "p" (pelo menos 1), 
var W = /^[A-Pa-p]{1,}$/;
//Y apenas vogais minúsculas (pelo menos 1), 
var Y = /^(a|e|i|o|u){1,}$/;
//Z apenas letras maiúsculas ou minúsculas e/ou números de 0 a 5 (opcional), 
var z = /^(([A-z0-5]{1,})|([A-z]{1,})|([0-5]?))$/;
//U deverá ser caracteres diferentes de números (pelo menos 1), 
var U = /^\D{1,}$/;
//V deverá ser 2 caracteres especiais e 
var V = /^[^a-zA-Z0-9]{2}$/;
//T qualquer caracter exceto 'a','b','0' e '1' (pelo menos 1)
var T = /^[^(a|b|0|1)]{1,}$/;
//Exemplo: 321a.&apMb.aei.Ab0-asf+_,/*.cq

console.log(X);
console.log(typeof(X));
//var padraoL = new RegExp(X\&W\.Y\.Z?\-U\,V\.T);
//var padraoL = /^X\&W\.Y\.Z?\-U\,V\.T$/;
var padraoL = /^[\w\.\_\-]{5,}\&[a-pA-P]{1,}\.(a|e|i|o|u){1,}\.(([A-z0-5]{1,})|([A-z]{1,})|([0-5]?))?\-\D{1,}\,[^a-zA-Z0-9]{2}\.[^(a|b|0|1)]{1,}$/;
document.getElementById("txtL").value = "321a.&apMb.aei.Ab0-asf+_,/*.cq";
console.log(padraoL);
console.log(typeof(padraoL));
document.getElementById("txtL").onfocus = function() {
    document.getElementById("validaL").checked=false;
    document.getElementById("mensagemL").innerHTML="";
}
document.getElementById("validaL").onclick = function() {
	if (document.getElementById("validaL").checked==false){
		document.getElementById("validaL").checked=false;
		document.getElementById("mensagemL").innerHTML="";
	}
	else{
		var dadoL = document.getElementById("txtL").value;
		//var padraoL = /^[\w\.\_\-]{5,}\&[a-pA-P]{1,}\.(a|e|i|o|u){1,}\.(([A-z0-5]{1,})|([A-z]{1,})|([0-5]?))?\-\D{1,}\,[^a-zA-Z0-9]{2}\.[^(a|b|0|1)]{1,}$/;
		if (padraoL.test(dadoL)){
			document.getElementById("mensagemL").innerHTML=" = Válido!";
			document.getElementById("mensagemL").style.backgroundColor = "green";
		}
		else{
			document.getElementById("mensagemL").innerHTML=" = Inválido!";
			document.getElementById("mensagemL").style.backgroundColor = "red";
		}
	}
};
/*
//var padraoL = /^((?=.*[A-Pa-p]{1,})(?=.*[a,e,i,o,u]{1,})(?=.*[A-Za-z0-5]{1,})(?=.*(^[0-9]){1,})(?=.*\W{2})(?=.*(^[a,b,0,1]){1,})[a-zA-Z0-9\.\_\-]{5,})$/;
//var padraoL = (X&W.Y.Z-U,V.T|X&W.Y-U,V.T);
//var padraoL = (X&W.Y(.Z)?-U,V.T);
//var padraoL = [\w\.\_\-]{5,}\&[A-Pa-p]{1,}\.[a,e,i,o,u]{1,}(\.([A-z][0-5]|[A-z]|[0-5]?))?\-\D{1,}\,[^a-zA-Z0-9]{2}\.(^[a,b,0,1]){1,}

X [\w\.\_\-]{5,}\&
W [A-Pa-p]{1,}\.
Y [a,e,i,o,u]{1,}\.
Z ([A-z][0-5]|[A-z]|[0-5]?)\-
U \D{1,}\,
V ([A-z0-5]{1,})|([A-z]{1,})|([0-5]?)\.
T [^(a|b|0|1)]{1,}
X&W.Y.Z-U,V.T
ou
X&W.Y-U,V.T
X [\w\.\_\-]{5,}\&
W [A-Pa-p]{1,}\.
Y [a,e,i,o,u]{1,}\-
U \D{1,}\,
V [^a-zA-Z0-9]{2}\.
T [^(a|b|0|1)]{1,}

([\w\.\_\-]{5,})\&([A-Pa-p]{1,})\.([a,e,i,o,u]{1,})\.(([A-z0-5]{1,})|([A-z]{1,})|([0-5]?))\-(\D{1,})\,([^a-zA-Z0-9]{2})\.([^(a|b|0|1)]{1,})
X&W.Y.Z-U,V.T
ou
X&W.Y-U,V.T
([\w\.\_\-]{5,})\&([A-Pa-p]{1,})\.([a,e,i,o,u]{1,})\-(\D{1,})\,([^a-zA-Z0-9]{2})\.((^[a,b,0,1]){1,})

teste versao reduzida:
[\w\.\_\-]{5,}\&[a-pA-P]{1,}\.(a|e|i|o|u){1,}\.(([A-z0-5]{1,})|([A-z]{1,})|([0-5]?))?\-\D{1,}\,[^a-zA-Z0-9]{2}\.[^(a|b|0|1)]{1,}


X&W.Y.Z-U,V.T ou X&W.Y-U,V.T
x&w.y.z-u,v.t 

x\&w\.y(\.z)\-u\,v\.t 
var padraoL = /^ x \& w \. y (\. z ) \- u \, v \. t $/;

Para unir condições diferentes na mesma expressão, precisa de um lookahead.
O lookahead não casa caracteres na posição atual, mas dá uma espiada adiante.
Se a asserção corresponde, retorna à posição atual, sem consumir caracteres.

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

//^(?=.[0-9]{2,})(?=.[a-z]{2,})(?=.[A-Z])(?=.[@#$%^&+=])(?=\S+$).{8,}$
function validarPass(input) {
 var errors = [];
 if (regra1) errors.push('erro1');
 if (regra2) errors.push('erro2');
 return errors;
 
function vSenha(senha) {
    return /^(((?=.*[a-z])(?=.*\d{2,}).{8,16})|(?=.*\d{2,})(?=.*[a-z]).{8,16})$/.test(senha);
}
*/
function limpaCampo(x){
	if(x==1) document.getElementById("txtA").value="";
	if(x==2) document.getElementById("txtB").value="";
	if(x==3) document.getElementById("txtC").value="";
	if(x==4) document.getElementById("txtD").value="";
	if(x==5) document.getElementById("txtE").value="";
	if(x==6) document.getElementById("txtF").value="";
	if(x==7) document.getElementById("txtG").value="";
	if(x==8) document.getElementById("txtH").value="";
	if(x==9) document.getElementById("txtI").value="";
	if(x==10) document.getElementById("txtJ").value="";
	if(x==11) document.getElementById("txtK").value="";
	if(x==12) document.getElementById("txtL").value="";
}