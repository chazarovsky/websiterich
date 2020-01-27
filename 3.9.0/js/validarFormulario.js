function validar(){
  var nombre, correo;
  nombre = document.getElementById("nombre").value;
  correo = document.getElementById("correo").value;
  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
}
