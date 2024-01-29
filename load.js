$(document).ready(function () {
    $('.inner-loading-screen').removeClass('d-none');

    
    setTimeout(function () {
        $('.inner-loading-screen').addClass('d-none');
    }, 2000); 
});