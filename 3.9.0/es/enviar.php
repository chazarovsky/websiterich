<?php
  $destino = "upalacios@richit.ai";
  $nombre = $_Post["nombre"];
  $correo = $_Post["correo"];
  $telefono = $_Post["telefono"];
  $contenido = "Nombre: " . $nombre ."\nCorreo: " .$correo . "\nTeléfono: " .$telefono;
  mail($destino,"Descarga de brochure", $contenido);
  header("contact.html");
 ?>
