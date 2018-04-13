$(document).ready(function(){
    $('#accordion-js').find('h3').click(function(){
        $(this).next().stop().slideToggle();
    }).next().stop().hide();
});