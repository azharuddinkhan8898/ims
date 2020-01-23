$(function(){
    $('img').on('dragstart', function(event) { event.preventDefault(); });
    $(window).on('load', function(){
        $('#loader').fadeOut();
    })
})