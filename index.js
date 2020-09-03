$(document).ready(function(){
    $('.menu-toggler').click(function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-btn').mousedown(function(){
        $(this).toggleClass('btnAnimation');
    })
    $('.top-btn').click(function(){
        var htmloffset = $( 'html' ).offset();
    $( 'html, body' ).animate( { scrollTop : htmloffset.top }, 400 );
    })
    
});