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

function validarContactoRSP(){
  var nombre, correo;
  nombre = document.getElementById("nombreContacto-RSP").value;
  correo = document.getElementById("correoContacto-RSP").value;

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


function validar01(){
  var nombre, correo;
  nombre = document.getElementById("nombre01").value;
  correo = document.getElementById("correo01").value;

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

function validar02(){
  var nombre, correo;
  nombre = document.getElementById("nombre02").value;
  correo = document.getElementById("correo02").value;

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

function validar03(){
  var nombre, correo;
  nombre = document.getElementById("nombre03").value;
  correo = document.getElementById("correo03").value;

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

function validar04(){
  var nombre, correo;
  nombre = document.getElementById("nombre04").value;
  correo = document.getElementById("correo04").value;

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


function validar1(){
  var nombre, correo;
  nombre = document.getElementById("nombre1").value;
  correo = document.getElementById("correo1").value;

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

function validar2(){
  var nombre, correo;
  nombre = document.getElementById("nombre2").value;
  correo = document.getElementById("correo2").value;

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

function validar3(){
  var nombre, correo;
  nombre = document.getElementById("nombre3").value;
  correo = document.getElementById("correo3").value;

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

function validar4(){
  var nombre, correo;
  nombre = document.getElementById("nombre4").value;
  correo = document.getElementById("correo4").value;

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

function validar5(){
  var nombre, correo;
  nombre = document.getElementById("nombre5").value;
  correo = document.getElementById("correo5").value;

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

function validar6(){
  var nombre, correo;
  nombre = document.getElementById("nombre6").value;
  correo = document.getElementById("correo6").value;

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

function validar7(){
  var nombre, correo;
  nombre = document.getElementById("nombre7").value;
  correo = document.getElementById("correo7").value;

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
function validar8(){
  var nombre, correo;
  nombre = document.getElementById("nombre8").value;
  correo = document.getElementById("correo8").value;

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
function validar9(){
  var nombre, correo;
  nombre = document.getElementById("nombre9").value;
  correo = document.getElementById("correo9").value;

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
  else if(correo.length>60){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}

function validar10(){
  var nombre, correo;
  nombre = document.getElementById("nombre10").value;
  correo = document.getElementById("correo10").value;

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

function validar11(){
  var nombre, correo;
  nombre = document.getElementById("nombre11").value;
  correo = document.getElementById("correo11").value;

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

function validar12(){
  var nombre, correo;
  nombre = document.getElementById("nombre12").value;
  correo = document.getElementById("correo12").value;

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

function validar13(){
  var nombre, correo;
  nombre = document.getElementById("nombre13").value;
  correo = document.getElementById("correo13").value;

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
  else if(correo.length>60){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}


function validar14(){
  var nombre, correo;
  nombre = document.getElementById("nombre14").value;
  correo = document.getElementById("correo14").value;

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
  else if(correo.length>60){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}


function validar15(){
  var nombre, correo;
  nombre = document.getElementById("nombre15").value;
  correo = document.getElementById("correo15").value;

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
  else if(correo.length>60){
    alert("El correo es muy largo");
    return false;
  }
  else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
  }
}
