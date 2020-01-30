/*
$(document).ready(function(){
  $("#form0").submit(function() {
    alert( " form0 Handler for .submit() called." );
  });

  $("#form1").submit(function() {
    $.ajax({
        url: '../images/slider.jpg',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'slider.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
  });
});

*/


$(document).ready(function(){

  /*
  $("#form0").submit(function() {
    alert( " form0 Handler for .submit() called." );
  });
  $("#form1").submit(function() {
    alert( " form1 Handler for .submit() called." );
  });
  $("#form2").submit(function() {
    alert( " form2 Handler for .submit() called." );
  });

Ayuda

$("#form0").on("submit", function() {
   alert( " form 0" );
})

$("#form1").on("submit", function() {
   alert( " form 1" );
})

$("form").click(function( event ) {
  var target = $( event.target );
  if ( target.is("#form0") ) {
    alert( " form 0" );
  } else if ( target.is("#form1" )){
    alert( " form 1" );
  }
});
*/

});
