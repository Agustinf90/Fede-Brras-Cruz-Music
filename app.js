$(document).ready(function(){
    $('.img-fluid').click(function() {
        $(this).fullscreen('active');
        $(this).siblings().not(this).toggleClass('hide');
    });
});