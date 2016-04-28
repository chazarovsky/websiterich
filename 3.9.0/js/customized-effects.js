$(document).ready(function(){
    $('.wrapper-hover-effect').find('img').animate({opacity: ".15"}, 400);
});

//hover-effect
$('.wrapper-hover-effect').hover(

    function(){
        $(this).find('img').animate({opacity: ".8"}, 400);
        $(this).find('h2,h4').animate({opacity:"0"}, 400);
    }, 
   function(){
        $(this).find('img').animate({opacity: "0.15"}, 400);
        $(this).find('h2,h4').animate({opacity:"1"}, 400);
    }
);    

//Auto-scroll-effect


$('.goToContact').click(function() {
    $('html,body').animate({
        scrollTop: $("footer").offset().top
    }, 1500);
}); 


    