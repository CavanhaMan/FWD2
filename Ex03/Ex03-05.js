function calcular(operador){
	var numm1 = document.getElementById("txtValor1").value;
	var numm2 = document.getElementById("txtValor2").value;
	if(/[\a-zA-Z]/.test(numm1)){
		alert("O campo apenas aceita números!" );
		document.getElementById("txtValor1").value="";
		document.getElementById("txtValor1").focus();
	}
	if(/[\a-zA-Z]/.test(numm2)){
		alert("O campo apenas aceita números!" );
		document.getElementById("txtValor2").value="";
		document.getElementById("txtValor2").focus();
	}
	else if(numm1 == "" || numm1 == " "){
		alert("Por favor preencha o campo!" );
		document.getElementById("txtValor1").value="";
		document.getElementById("txtValor1").focus();
	}
	else if(numm2 == "" || numm2 == " "){
		alert("Por favor preencha o campo!" );
		document.getElementById("txtValor2").value="";
		document.getElementById("txtValor2").focus();
	}
	else if(operador=="/" && numm2 == 0){
		alert("Erro! Divisão por zero não pode ser efetuada!" );
		document.getElementById("txtValor2").value="";
		document.getElementById("txtValor2").focus();
	}
	else
		document.getElementById('txtResultado').value = eval(document.getElementById('txtValor1').value + operador + document.getElementById('txtValor2').value);
};
