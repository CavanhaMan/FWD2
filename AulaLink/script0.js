$(document).ready(function(){
	$('.hand').mouseout(function(){
		$('#mycursor').hide();
			return false;
	});
	$('.hand').mouseenter(function(){
		$('#mycursor').show();
			return false;
	});
	$('.hand').mousemove(function(e){
		$('#mycursor').css('left', e.clientX - 20).css('top', e.clientY + 7);
	});
});
