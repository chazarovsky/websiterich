function validar(){
  var nombre, correo;
  nombre = document.getElementById("nombre").value;
  correo = document.getElementById("correo").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>120){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>100){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>100){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }

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

}
