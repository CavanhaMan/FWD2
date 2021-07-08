$(document).ready(function(){
	$('.hand').mouseout(function(){
		$('#mycursor').hide();
			return false;
	});
	$('.hand').mouseenter(function(){
		$("#saida")[0].innerHTML=$(this).attr('href');
		$('#mycursor').show();
			return false;
	});
	$('.hand').mousemove(function(e){
		$('#mycursor').css('left', e.clientX - 20).css('top', e.clientY + 7);
	});
});



//var teste = $('#link1').attr('href');
//console.log(teste);
//$("#saida")[0].innerHTML=teste;

//$("#saida")[0].innerHTML=$('#link1').attr('href');