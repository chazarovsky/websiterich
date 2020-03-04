/*
Este fragmento crea un <a download> descarga automaticamente el archivo pero menos navegadores lo implementan
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
*/


$(document).ready(function(){

  $("#form0").submit(function() {
    var valFileDownloadPath = '../brochures_gob/ebook_directricesDeAltoNivel.pdf';
    window.open(valFileDownloadPath , '_blank');
  });

  $("#form1").submit(function() {
    var valFileDownloadPath = '../brochures_gob/Modelado_de_Datos.pdf';
    window.open(valFileDownloadPath , '_blank');
  });

  $("#form2").submit(function() {
    var valFileDownloadPath = '../brochures_gob/Metadatos.pdf';
    window.open(valFileDownloadPath , '_blank');
  });

  $("#form3").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Integracion_e_Interoperabilidad.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form4").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Grandes_Datos_y_Ciencia_de _Datos.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form5").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Gobierno_de_Datos.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form6").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Documento_y_Contenido.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form7").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Datos_Maestros_y_de_Referencia.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form8").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Data_Warehousing_and_Business_Intelligence.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form9").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Data_Security.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form10").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Calidad_de_Datos.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form11").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Arquitectura_de_datos.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form12").submit(function() {
    var valFileDownloadPath3 = '../brochures_gob/Almacenamiento_de_datos_y_operaciones.pdf';
    window.open(valFileDownloadPath3 , '_blank');
  });

  $("#form13").submit(function() {
    var valFileDownloadPath3 = 'https://docs.google.com/forms/d/e/1FAIpQLSd-7amyF3tIuATJT-I1xIamGe68pNblpWk6cpd15tGe0lCVew/viewform?usp=sf_link';
    window.open(valFileDownloadPath3 , '_blank');
  });


});
