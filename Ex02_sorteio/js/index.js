/* Rodrigo CavanhaMan */
$(document).ready(function (){
	var mostraex1="1. Construa uma página para a Internet capaz de gerar e mostrar os seis números da mega sena para uma pessoa. Os números deverão ser exibidos no corpo do documento HTML ao usuário, após o carregamento da página.";
	var mostraex2="2. Crie uma página web capaz de sortear a ordem de apresentação de um grupo de pessoas a partir das seguintes informações: número de pessoas e o nome de cada uma delas. Após a entradas destas informações, a página deverá ser capaz de exibir ao usuário, no corpo do documento, a sequência das apresentações, conforme mostrado na imagem.";
	var mostraex3="3. Crie uma página web para sortear as cartas do jogo TRUCO para os 4 jogadores. Devem ser sorteadas 12 cartas, 3 para cada jogador"

	$('button').hover(
		function(){$(this).css("background-color", "#ffdb4d");}, 
		function(){$(this).css("background-color", "#997a00");}
	);
	
	//FUNÇÃO HOME
	$('#ex0').click(function(e){
		document.getElementById("imgshow").src=""; 
		$("#frametxt").attr("src", "");
		$("#framehtml").attr("src", "blank.html");
	});
	//$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "");});

	//FUNÇÃO EXERCÍCIOS
	$('#ex').click(function(e){
		document.getElementById("imgshow").src=""; 
		$("#mostraex").text("");
		$("#framehtml").attr("src", "JavaScript_-_Lista_de_exercicios_02.pdf");
	});

	//FUNÇÃO EXERCÍCIOS EXTRA
	$('#exE').click(function(e){
		document.getElementById("imgshow").src=""; 
		$("#mostraex").text("");
		$("#framehtml").attr("src", "JavaScript_-_Lista_de_exercicios_02a.pdf");
	});

	//FUNÇÃO MEGASENA
	$('#ex1').click(function(e){
		document.getElementById("imgshow").src="img/megasena.png"; 
		$("#mostraex").text(mostraex1);
		$("#framehtml").attr("src", "MegaSena.html");
		clicado=1;
	});
	//$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "MegaSenaTxt.html");});

	//FUNÇÃO SORTEIO
	$('#ex2').click(function(e){
		document.getElementById("imgshow").src="img/sorteio.png"; 
		//document.getElementById("imgmega").style.visibility = "hidden"; 
		$("#mostraex").text(mostraex2);
		$("#framehtml").attr("src", "Sorteio.html");
		clicado=2;
	});
	//$('#ex2').mouseover(function(e){$("#frametxt").attr("src", "SorteioTxt.html");});

	//FUNÇÃO SORTEIO SIMPLIFICADA
	$('#ex2a').click(function(e){
		document.getElementById("imgshow").src="img/sorteio.png"; 
		//document.getElementById("imgmega").style.visibility = "hidden"; 
		$("#mostraex").text(mostraex2);
		$("#framehtml").attr("src", "SorteioEasy.html");
		clicado=2;
	});

	//FUNÇÃO BARALHO TRUCO
	$('#ex3').click(function(e){
		document.getElementById("imgshow").src="img/truco.png"; 
		//document.getElementById("imgmega").style.visibility = "hidden"; 
		$("#mostraex").text(mostraex3);
		$("#framehtml").attr("src", "Truco.html");
		clicado=3;
	});

});
//<img id="imgmega" src="megasena.png" alt="megasena">
//<img id="imgsorte" src="sorteio.png" alt="sorteio" width="200px">

