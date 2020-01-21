<?php
  $destino = "urspala@gmail.com";
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $telefono = $_POST["telefono"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono;
  mail($destino,"Descarga de brochure", $contenido);
  header("Location: http://richit.ai/es/");
  echo"<script type=\"text/javascript\">alert('Su mensaje ha sido enviado con exito, en la brevedad posible nos comunicaremos con usted'); window.location='index.html';</script>";
 
 ?>
