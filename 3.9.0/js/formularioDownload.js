

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
