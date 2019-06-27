var span1 = document.getElementById("aviso1");
var span2 = document.getElementById("aviso2");
var pass1 = document.getElementById("txtSenha");
var pass2 = document.getElementById("txtConfirma");
var user = document.getElementById("txtLogin");

/*     Mostrar/esconder a senha     */
function mostraPass1() {document.getElementById("txtSenha").type = "text";}
function escondePass1() {document.getElementById("txtSenha").type = "password";}
function mostraPass2() {document.getElementById("txtConfirma").type = "text";}
function escondePass2() {document.getElementById("txtConfirma").type = "password";}


/*     Destacar o campo editado     */
pass1.onfocus= function() {mudarClass('campo pass comdestaque',this);}
pass1.onblur= function() {mudarClass('campo pass semdestaque',this);}
pass2.onfocus= function() {mudarClass('campo pass comdestaque',this);}
pass2.onblur= function() {mudarClass('campo pass semdestaque',this);}
user.onfocus= function() {mudarClass('campo comdestaque',this);}
user.onblur= function() {mudarClass('campo semdestaque',this);}
function mudarClass(nomeClasse,ids){ids.className = nomeClasse;}

	//(max. 8 caracteres)



document.forms["formCad"].onsubmit = function(){
	var userx = document.formCad.txtLogin.value;
	var senha1 = document.formCad.txtSenha.value;
	var senha2 = document.formCad.txtConfirma.value;
	if(userx=="" || userx==" " || userx.length < 1){
		alert("É necessário digitar um nome de usuário!" );
		document.formCad.txtLogin.focus();
		return false;
	}
	if(senha1=="" || senha1==" " || senha1.length < 1){
		alert("É necessário digitar uma senha!" );
		document.formCad.txtSenha.focus();
		return false;
	}
	else if(senha1.length > 8 ){
		alert("A senha deve conter no máximo 8 caracteres!" );
		document.formCad.txtSenha.value="";
		document.formCad.txtSenha.focus();
		return false;
	}
	else if(senha2=="" || senha2==" " || senha2.length < 1 ){
		alert("É necessário confirmar a senha!" );
		document.formCad.txtConfirmar.focus();
		return false;
	}
	else if(senha1!=senha2){
		alert("A senha não foi confirmada corretamente. Por favor redigite." );
		document.formCad.txtConfirma.value="";
		document.formCad.txtSenha.focus();
		return false;
	}
	alert("Acesso ao sistema foi efetuado com sucesso!");
	return true;
}

