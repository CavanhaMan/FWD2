/* Rodrigo CavanhaMan */
clicked = true;
$(document).ready(function (){
	document.getElementById("imgmega").style.visibility = "hidden"; 
	document.getElementById("imgmega").style.visibility = "hidden"; 
	
	$('button').hover(
		function(){$(this).css("background-color", "#ffdb4d");}, 
		function(){$(this).css("background-color", "#997a00");}
	);
	
	$('#ex1').click(function(e){
		document.getElementById("imgmega").style.visibility = 'visible';
		document.getElementById("imgsorte").style.visibility = 'hidden';
		$("#frametxt").attr("src", "MegaSena.txt");
		$("#framehtml").attr("src", "MegaSena.html");
	});
	$('#ex1').mouseover(function(e){$("#frametxt").attr("src", "MegaSena.txt");});
	$('#ex1').mouseout(function(e){$("#frametxt").attr("src", "");});

	$('#ex2').click(function(e){
		document.getElementById("imgmega").style.visibility = "hidden"; 
		document.getElementById("imgsorte").style.visibility = "visible"; 
		$("#frametxt").attr("src", "Sorteio.txt");
		$("#framehtml").attr("src", "Sorteio.html");
	});
	$('#ex2').mouseover(function(e){$("#frametxt").attr("src", "Sorteio.txt");});
	$('#ex2').mouseout(function(e){$("#frametxt").attr("src", "");});


});

