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

  $("#form0").submit(function() {
    var valFileDownloadPath = '../brochures_gob/ebook_directricesDeAltoNivel.pdf';
    window.open(valFileDownloadPath , '_blank');
  });

  $("#form1").submit(function() {
    $.ajax({
        url: '../brochures_gob/Modelado_de_Datos.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'Modelado_de_Datos.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
  });

  $("#form2").submit(function() {
    $.ajax({
        url: '../brochures_gob/Metadatos.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'Metadatos.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
  });

  $("#form3").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Integracion_e_Interoperabilidad.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });



});
