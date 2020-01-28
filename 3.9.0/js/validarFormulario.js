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


  window.onload=function(){
    const form0 = document.getElementById("form0");
    form0.addEventListener("submit",(e) => {
      e.preventDefault();
      console.log("form0 is submited");
    });
  }


}
