<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if($_POST) {
    $nombre = "";
    $correo = "";
    $telefono = "";
    $mensaje = "";

    if(isset($_POST['nombre-Contacto']) && $_POST['nombre-Contacto'] != '') {
        if (strlen($_POST['nombre-Contacto']) > 35 || strlen($_POST['nombre-Contacto']) < 2) {
            echo '<p>Something went wrong</p>';
        } else {
            $nombre = filter_var($_POST['nombre-Contacto'], FILTER_SANITIZE_STRING);
        }
    }

    if(isset($_POST['correo-Contacto']) && $_POST['correo-Contacto'] != '') {
        $correo = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['correo-Contacto']);
        $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);
    }

    if($_POST['telefono-Contacto'] == '' || (strlen($_POST['telefono-Contacto']) < 16) ) {
        $telefono = $_POST['telefono-Contacto'];
    }

    if(isset($_POST['texto-Contacto'])) {
        $mensaje = htmlspecialchars($_POST['texto-Contacto']);
    }


    $contacto = "contacto";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    //.'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $contacto . "\r\n";

    // Datos para el correo
    $destinatario = "upalacios@richit.ai, gmanzanares@richit.ai";
    $asunto = "Contacto pagina RICH IT";

    $contenido= "";
    $contenido .= "Nombre: " . $nombre . "\r\n";
    $contenido .= "Correo: " . $correo . "\r\n";
    $contenido .= "Teléfono: " . $telefono . "\r\n" ;
    $contenido .= "Notas: " . $mensaje . "\r\n";


    if(mail($destinatario, $asunto, $contenido, $headers)) {
      header("Location: http://richit.ai/es/contacto-conver.html#contacto");
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}

?>
