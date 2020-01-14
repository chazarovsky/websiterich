<?php
  $destino = "upalacios@richit.ai";
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $telefono = $_POST["telefono"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono;
  mail($destino,"Descarga de brochure", $contenido);
  header("Location: http://richit.ai/es/");
 ?>
