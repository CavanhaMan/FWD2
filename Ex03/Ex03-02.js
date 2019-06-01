/*
Ao digitar um valor dentro da primeira caixa de textos,
“Digite um valor”, e após clicar sobre o botão “Mostrar o dobro”,
o dobro do valor digitado pelo usuário deverá ser exibido dentro
da caixa de texto “Dobro do valor”.
OBS: Valide a informação do primeiro campo, isto é, verifique
se é um número. A segunda caixa de textos deverá estar desabilitada
para inserção de valores.*/

$(document).ready(function (){
	document.getElementById("btDobro").onclick = function() {
		var numm = document.getElementById("txtValor").value;
		if(/[\a-zA-Z]/.test(numm)){
			alert("O campo apenas aceita números!" );
			document.dobrar.txtValor.focus();
		}
		else if(numm == "" || numm == " "){
			alert("Por favor preencha o campo!" );
			document.dobrar.txtValor.focus();
		}
		else
			document.getElementById("txtDobro").value=(numm*2);
	};
});
