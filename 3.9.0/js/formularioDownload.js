

$(document).ready(function(){
  $("#form0").submit(function() {
    alert( " form0 Handler for .submit() called." );
  });

  $("#form1").submit(function() {
    e.preventDefault();  //stop the browser from following
      window.location.href = '../images/slider.jpg';
  });

});
