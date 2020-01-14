<?php
  $destino = "upalacios@richit.ai";
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $telefono = $_POST["telefono"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono;
  mail($destino,"Descarga de brochure", $contenido);
  echo "<script> alert('correo enviado con éxito')</script>";
  echo "<script> setTimeout(\"location.href='contact.html'\",1000)</script>";
 ?>
