/*
O usuário deverá ter selecionado um livro
- Uma forma de pagamento deverá ter sido selecionada
- Pelo menos uma opção deverá ter sido selecionada em “Como você conheceu o nosso site?”
- O nome da pessoa não poderá estar em branco e deverá conter apenas letras
*/
$("#txtCep").mask("00.000-000");

document.forms["formCad"].onsubmit = function(){
	var nomee = document.formCad.txtNome.value
	if(nomee=="" || nomee==" " || nomee.length < 1){
		alert("É necessário digitar um nome!" );
		document.formCad.txtNome.focus();
		return false;
	}
	else if(/[\d]/.test(nomee)){
		alert("O nome deve conter apenas letras!" );
		document.formCad.txtNome.focus();
		return false;
	}
	else if(/[\d]/.test(nomee)){
		alert("O nome deve conter apenas letras!" );
		document.formCad.txtNome.focus();
		return false;
	}
	else if(document.formCad.dropLivro.value==""){
		alert("É necessário escolher um livro!" );
		document.formCad.dropLivro.focus();
		return false;
	}
	else if(document.formCad.radioPagto.value==""){
		alert("É necessário escolher uma forma de pagamento!" );
		return false;
	}
	else if(document.formCad.ck1.checked==false && document.formCad.ck2.checked==false ){
		alert("Por favor informe como conheceu nosso site!" );
		return false;
	}
	alert("Cadastro efetuado com sucesso!");
	return true;
}


