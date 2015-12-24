$(document).ready(function(){
    $('.wrapper-hover-effect').find('img').animate({opacity: ".15"}, 400);
});


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
    