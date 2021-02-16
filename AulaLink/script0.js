$(document).ready(function(){
	$('.test-area').mouseout(function(){
		$('#mycursor').hide();
			return false;
	});
	$('.test-area').mouseenter(function(){
		$('#mycursor').show();
			return false;
	});
	$('.test-area').mousemove(function(e){
		$('#mycursor').css('left', e.clientX - 20).css('top', e.clientY + 7);
	});
});
