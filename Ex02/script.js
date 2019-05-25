/* Rodrigo CavanhaMan */
$(document).ready(function (){
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

	//FUNÇÃO MEGASENA
	$('#ex1').click(function(e){
		document.getElementById("imgshow").src="megasena.png"; 
		$("#frametxt").attr("src", "MegaSenaTxt.html");
		$("#framehtml").attr("src", "MegaSena.html");
		clicado=1;
	});
	//$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "MegaSenaTxt.html");});

	//FUNÇÃO SORTEIO
	$('#ex2').click(function(e){
		document.getElementById("imgshow").src="sorteio.png"; 
		//document.getElementById("imgmega").style.visibility = "hidden"; 
		$("#frametxt").attr("src", "SorteioTxt.html");
		$("#framehtml").attr("src", "Sorteio.html");
		clicado=2;
	});
	//$('#ex2').mouseover(function(e){$("#frametxt").attr("src", "SorteioTxt.html");});


});
//<img id="imgmega" src="megasena.png" alt="megasena">
//<img id="imgsorte" src="sorteio.png" alt="sorteio" width="200px">

