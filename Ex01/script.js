/* Rodrigo CavanhaMan */
clicked = true;
$(document).ready(function (){
	$('button').hover(
		function(){$(this).css("background-color", "red");}, 
		function(){$(this).css("background-color", "#380606");}
	);
	
	$('#mem').click(function(e){
		$("#frametxt").attr("src", "lembrar.txt");
		$("#framehtml").attr("src", "lembrar.html");
		$(this).css("background-color", "blue");
	});
	$('#mem').mouseover(function(e){
		$("#frametxt").attr("src", "lembrar.txt");
		
	});
	$('#mem').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex1').click(function(e){
		$("#frametxt").attr("src", "ex01_01.txt");
		$("#framehtml").attr("src", "ex01_01.html");
	});
	$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "ex01_01.txt");});
	$('#ex1').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex2').click(function(e){
		$("#frametxt").attr("src", "ex01_02.txt");
		$("#framehtml").attr("src", "ex01_02.html");
	});
	$('#ex2').mouseover(function(e){$("#frametxt").attr("src", "ex01_02.txt");});
	$('#ex2').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex3').click(function(e){
		$("#frametxt").attr("src", "ex01_03.txt");
		$("#framehtml").attr("src", "ex01_03.html");
	});
	$('#ex3').mouseover(function(e){$("#frametxt").attr("src", "ex01_03.txt");});
	$('#ex3').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex4').click(function(e){
		$("#frametxt").attr("src", "ex01_04.txt");
		$("#framehtml").attr("src", "ex01_04.html");
	});
	$('#ex4').mouseover(function(e){$("#frametxt").attr("src", "ex01_04.txt");});
	$('#ex4').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex5').click(function(e){
		$("#frametxt").attr("src", "ex01_05.txt");
		$("#framehtml").attr("src", "ex01_05.html");
	});
	$('#ex5').mouseover(function(e){$("#frametxt").attr("src", "ex01_05.txt");});
	$('#ex5').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex6').click(function(e){
		$("#frametxt").attr("src", "ex01_06.txt");
		$("#framehtml").attr("src", "ex01_06.html");
	});
	$('#ex6').mouseover(function(e){$("#frametxt").attr("src", "ex01_06.txt");});
	$('#ex6').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex7').click(function(e){
		$("#frametxt").attr("src", "ex01_07.txt");
		$("#framehtml").attr("src", "ex01_07.html");
	});
	$('#ex7').mouseover(function(e){$("#frametxt").attr("src", "ex01_07.txt");});
	$('#ex7').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex8').click(function(e){
		$("#frametxt").attr("src", "ex01_08.txt");
		$("#framehtml").attr("src", "ex01_08.html");
	});
	$('#ex8').mouseover(function(e){$("#frametxt").attr("src", "ex01_08.txt");});
	$('#ex8').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex9').click(function(e){
		$("#frametxt").attr("src", "ex01_09.txt");
		$("#framehtml").attr("src", "ex01_09.html");
	});
	$('#ex9').mouseover(function(e){$("#frametxt").attr("src", "ex01_09.txt");});
	$('#ex9').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex10').click(function(e){
		$("#frametxt").attr("src", "ex01_10.txt");
		$("#framehtml").attr("src", "ex01_10.html");
	});
	$('#ex10').mouseover(function(e){$("#frametxt").attr("src", "ex01_10.txt");});
	$('#ex10').mouseout(function(e){$("#frametxt").attr("src", "");});

});

