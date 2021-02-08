function validarContacto(){
  var nombre, correo;
  nombre = document.getElementById("nombreContacto").value;
  correo = document.getElementById("correoContacto").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarRSP(){
  var nombre, correo;
  nombre = document.getElementById("nombreRSP").value;
  correo = document.getElementById("correoRSP").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarCloudera(){
  var nombre, correo;
  nombre = document.getElementById("nombreCloudera").value;
  correo = document.getElementById("correoCloudera").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarDremio(){
  var nombre, correo;
  nombre = document.getElementById("nombreDremio").value;
  correo = document.getElementById("correoDremio").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarElastic(){
  var nombre, correo;
  nombre = document.getElementById("nombreElastic").value;
  correo = document.getElementById("correoElastic").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarKafka(){
  var nombre, correo;
  nombre = document.getElementById("nombreKafka").value;
  correo = document.getElementById("correoKafka").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarDataservices(){
  var nombre, correo;
  nombre = document.getElementById("nombreDataservices").value;
  correo = document.getElementById("correoDataservices").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarRSPE(){
  var nombre, correo;
  nombre = document.getElementById("nombreRSPE").value;
  correo = document.getElementById("correoRSPE").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarCPG(){
  var nombre, correo;
  nombre = document.getElementById("nombreCPG").value;
  correo = document.getElementById("correoCPG").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validarML(){
  var nombre, correo;
  nombre = document.getElementById("nombreML").value;
  correo = document.getElementById("correoML").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validar0(){
  var nombre, correo;
  nombre = document.getElementById("nombre0").value;
  correo = document.getElementById("correo0").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" ||  correo === ""){
    alert("El campo Nombre y Correo son obligatorios");
    return false;
  }
  else if(nombre.length>60){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(correo.length>50){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}
