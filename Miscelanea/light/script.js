$('.cube-switch .switch').click(function() {
    if ($('.cube-switch').hasClass('active')) {
        $('.cube-switch').removeClass('active');
        $('#light-bulb2').css({'opacity': '0'});
    } else {
        $('.cube-switch').addClass('active');
        $('#light-bulb2').css({'opacity': '1'});
    }
});