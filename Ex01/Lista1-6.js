	//*********** QUESTÃO 1 *********************************************
		document.getElementById("lista1").onclick = function() {q1segundoemdiante()};
		function q1segundoemdiante() {
			var q1a = document.querySelectorAll("ol[id] > li");
			for (var i=1 ; i<q1a.length ; i++){
					q1a[i].style.color = "red";
			}
		}
		document.getElementById("lista1").firstElementChild.ondblclick = function() {q1primeiro()};
		function q1primeiro() {
			var q1b = document.querySelectorAll("ol[id] > li");
			for (var i=0 ; i<q1b.length ; i++){
					q1b[i].style.color = "black";
			}
		}
	//*********** QUESTÃO 2 *********************************************
		var botao1 = document.getElementById("btqt2");
		//botao1.clicado = false;
		botao1.onclick = function(){
			if (this.clicado == false){
				this.clicado = true;
				this.style.color="yellow";
				this.style.background="black";
			}
			else{
				this.clicado = false;
				this.style.color="red";
				this.style.background="cyan";
			}
		}
	//*********** QUESTÃO 3 *********************************************
		var p1 = document.getElementById("para1");
		p1.clicado = false;
		p1.onclick = function(){
			if (this.clicado == false){
				this.clicado = true;
				this.style.background="cyan";
			}
			else{
				this.clicado = false;
				this.style.background="white";
			}
		}
		var p2 = document.getElementById("para2");
		p2.clicado = false;
		p2.onclick = function(){
			if (this.clicado == false){
				this.clicado = true;
				this.style.background="red";
			}
			else{
				this.clicado = false;
				this.style.background="white";
			}
		}
		var p3 = document.getElementById("para3");
		p3.clicado = false;
		p3.onclick = function(){
			if (this.clicado == false){
				this.clicado = true;
				this.style.background="yellow";
			}
			else{
				this.clicado = false;
				this.style.background="white";
			}
		}
	//*********** QUESTÃO 4 *********************************************
		var qt4 = document.querySelectorAll("tr");
		for(var i=0 ; i<qt4.length ; i++){
			qt4[i].onmouseenter = function(){
				this.style.borderColor="purple";
				this.style.background="#ffccff";
			}
			if (i%2!=0){
				qt4[i].onmouseleave = function(){
					this.style.borderColor="black";
					this.style.background="white";
				}
			}
		}
				//QUESTÃO 4 botao ***************************************
		var botao4 = document.getElementById("btqt4");
		var tb4 = document.getElementById("tbl4");
		
		botao4.onmouseenter = function(){
			botao4.style.color="red";
			botao4.style.fontWeight="bold";
			tb4.style.color="red";
			tb4.style.fontWeight="bold";
		}
		botao4.onmouseleave = function(){
			botao4.style.color="black";
			botao4.style.fontWeight="normal";
			tb4.style.color="black";
			tb4.style.fontWeight="normal";
		}

	//*********** QUESTÃO 5 *********************************************
		var tamanho = 0;
		var btmais = document.getElementById("btaumentar");
		var btmenos= document.getElementById("btdiminuir");

		btmais.onmouseenter = function() {
			tamanho++;
			document.getElementById("valor").innerHTML=tamanho;
			console.log(tamanho);
		}
		btmais.onmouseleave = function(){
			window.alert("Valor da variável: " + tamanho + " Botão: " + btaumentar.id);
		}
		btmenos.onmouseover = function(){
			tamanho--;
			document.getElementById("valor").innerHTML=tamanho;
			console.log(tamanho);
			
		}
	//*********** QUESTÃO 6 *********************************************
		var titulocadastro = document.getElementById("titulocad");

				//QUESTÃO 6 radiobutton *********************************
		var cores = document.getElementsByName("formcor");
		document.getElementById("corh1").onclick = function(){
			for (var i = 0; i < cores.length; i++) {
				if (cores[i].checked) {
					titulocadastro.style.color = cores[i].value;
				}
			}
		}
				//QUESTÃO 6 campo ***************************************
		document.getElementById("campocor").oninput = function(){
			titulocadastro.style.color = this.value;
		}
				//QUESTÃO 6 password ************************************
		var senha = document.getElementById("campopwd");
		var resultado = document.getElementById("res1");
		function letecla(){
			if(event.keyCode == 13) {
				titulocadastro.style.color = senha.value;
				if (senha.value == "red" ||
					senha.value == "yellow" ||
					senha.value == "blue" || 
					senha.value == "brown" || 
					senha.value == "purple" || 
					senha.value == "black" || 
					senha.value == "cyan") { resultado.innerHTML = senha.value;}
				else {
					resultado.innerHTML = "Senha incorreta";
					titulocadastro.style.color = "black";
				}
				senha.value="";
			}
		}
				//QUESTÃO 6 checkbox ************************************
		function funcCor(){
			var chbcor = document.getElementsByClassName('chbcor');
			if( chbcor[0].checked){ titulocadastro.style.color = 'red';}
			else if( chbcor[1].checked){ titulocadastro.style.color = 'blue';}
			else if( chbcor[2].checked){ titulocadastro.style.color = 'yellow';}
			else if( chbcor[3].checked){ titulocadastro.style.color = 'green';}
			else if( chbcor[4].checked){ titulocadastro.style.color = 'gray';}
			else { titulocadastro.style.color = 'black';}
		}
				//QUESTÃO 6 ckecklist ***********************************
		document.getElementById("escolhecor").onchange = function(){
			titulocadastro.style.color = this.value;
		}
	//*********** QUESTÃO 7 *********************************************
		window.onload=function(){
		var titulo7 = document.getElementById("tituloqt7");
		var cxtxt = document.getElementsByTagName("textarea");
			for( var i=0; i<cxtxt.length; i++ ) {
				cxtxt[i].onfocus= function() {
					titulo7.style.color="purple";
					mudarClass('comdestaque',this);
				}
				cxtxt[i].onblur= function() {
					titulo7.style.color="red";
					mudarClass('semdestaque',this);
				}
			}
			function mudarClass(nomeClasse,ids){
				ids.className = nomeClasse;
			}
		}
