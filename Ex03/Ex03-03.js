$(document).ready(function (){
	document.getElementById("btResultado").onclick = function() {
		var numm1 = document.getElementById("txtNota1").value;
		var numm2 = document.getElementById("txtNota2").value;
		if(/[\a-zA-Z]/.test(numm1)){
			alert("O campo apenas aceita números!" );
			document.dobrar.txtNota1.focus();
		}
		if(/[\a-zA-Z]/.test(numm2)){
			alert("O campo apenas aceita números!" );
			document.dobrar.txtNota2.focus();
		}
		else if(numm1 == "" || numm1 == " "){
			alert("Por favor preencha o campo!" );
			document.dobrar.txtNota1.focus();
		}
		else if(numm2 == "" || numm2 == " "){
			alert("Por favor preencha o campo!" );
			document.dobrar.txtNota2.focus();
		}
		else{
			var n1 = document.getElementById("txtNota1").value;
			var n2 = document.getElementById("txtNota2").value;
			var total = eval(n1 + "+" + n2);
			if (total >= 60)
				alert("Aluno aprovado! Nota: " + n1 + " + " + n2 + " = " + total + ".");
			else
				alert("Aluno reprovado! Nota: " + n1 + " + " + n2 + " = " + total + " -> Faltou " + (60-total) + " pontos!");
		}
	};
});
