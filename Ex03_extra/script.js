/*
O usuário deverá ter selecionado um livro
- Uma forma de pagamento deverá ter sido selecionada
- Pelo menos uma opção deverá ter sido selecionada em “Como você conheceu o nosso site?”
- O nome da pessoa não poderá estar em branco e deverá conter apenas letras

function cadastrar() {
  var x = document.getElementById("myRadio").required;
  document.getElementById("demo").innerHTML = x;
}
*/

$("#txtCep").mask("00.000-000");

document.forms["formCad"].onsubmit = function(){
	if(this.checkValidity()){
		alert("Formulário enviado com sucesso!");
		return true;
	}
	else{
		if(this["txtNome"].checkValidity === false)
			alert("É necessário digitar um nome");
		if(this["dropLivro"].checkValidity === false)
			alert("É necessário escolher um livro");
		if(this["radioPagto"].checkValidity === false)
			alert("É necessário escolher uma forma de pagamento");
		if(this["checkComo"].checkValidity === false)
			alert("Por favor informe como conheceu nosso site");
	}
	return false;
}



/*
<button onClick="dobrar()">

function dobrar(){
	var x = document.getElementById("valor").value;
	document.getElementById("dobro").value = (x*2);
}*/