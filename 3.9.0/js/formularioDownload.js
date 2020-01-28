

$(document).ready(function(){
  $("#form0").submit(function() {
    alert( " form0 Handler for .submit() called." );
  });

  $("#form1").submit(function() {
    $('a').attr({target: '_blank', 
                    href  : '../images/slider.jpg});
  });

});
