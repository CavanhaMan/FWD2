/* Rodrigo CavanhaMan */
clicked = true;
$(document).ready(function (){
	$('button').hover(
		function(){$(this).css("background-color", "red");},
		function(){$(this).css("background-color", "#ffa64d");},
	);
	$('button').hover(
		function(){$(this).css("font-weight", "bold");},
		function(){$(this).css("font-weight", "normal");},
	);
	
	$('#rec').click(function(e){
		document.location.reload(true);
	});
	$('#rec').mouseover(function(e){$("#frametxt").attr("src", "txt/recarrega.html");});

	$('#mem').click(function(e){
		$("#frametxt").attr("src", "txt/lembrar.html");
		$("#framehtml").attr("src", "txt/ListaJSB-Caixas_de_Diálogo.pdf");
		$(this).css("background-color", "blue");
	});
	$('#mem').mouseover(function(e){$("#frametxt").attr("src", "txt/lembrar.html");});

	$('#ex1').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_01.html");
		$("#framehtml").attr("src", "ex13_01.html");
	});
	$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_01.html");});

	$('#ex2').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_02.html");
		$("#framehtml").attr("src", "ex13_02.html");
	});
	$('#ex2').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_02.html");});

	$('#ex3').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_03.html");
		$("#framehtml").attr("src", "ex13_03.html");
	});
	$('#ex3').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_03.html");});

	$('#ex4').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_04.html");
		$("#framehtml").attr("src", "ex13_04.html");
	});
	$('#ex4').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_04.html");});

	$('#ex5').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_05.html");
		$("#framehtml").attr("src", "ex13_05.html");
	});
	$('#ex5').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_05.html");});

	$('#ex6').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_06.html");
		$("#framehtml").attr("src", "ex13_06.html");
	});
	$('#ex6').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_06.html");});

	$('#ex7').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_07.html");
		$("#framehtml").attr("src", "ex13_07.html");
	});
	$('#ex7').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_07.html");});

	$('#ex8').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_08.html");
		$("#framehtml").attr("src", "ex13_08.html");
	});
	$('#ex8').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_08.html");});

	$('#ex9').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_09.html");
		$("#framehtml").attr("src", "ex13_09.html");
	});
	$('#ex9').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_09.html");});

	$('#ex10').click(function(e){
		$("#frametxt").attr("src", "txt/ex13_10.html");
		$("#framehtml").attr("src", "ex13_10.html");
	});
	$('#ex10').mouseover(function(e){$("#frametxt").attr("src", "txt/ex13_10.html");});

});

