/* Rodrigo CavanhaMan */
clicked = true;
$(document).ready(function (){
	$('button').hover(
		function(){$(this).css("background-color", "red");}, 
		function(){$(this).css("background-color", "#380606");}
	);
	
	$('#ex1').click(function(e){
		$("#frametxt").attr("src", "MegaSena.txt");
		$("#framehtml").attr("src", "MegaSena.html");
	});
	$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "MegaSena.txt");});
	$('#ex1').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex2').click(function(e){
		$("#frametxt").attr("src", "Sorteio.txt");
		$("#framehtml").attr("src", "Sorteio.html");
	});
	$('#ex2').mouseover(function(e){$("#frametxt").attr("src", "Sorteio.txt");});
	$('#ex2').mouseout(function(e){$("#frametxt").attr("src", "");});


});

