<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if($_POST) {
    $nombre = "";
    $correo = "";
    $telefono = "";


    if(isset($_POST['nombre1']) && $_POST['nombre1'] != '') {
        if (strlen($_POST['nombre1']) > 35 || strlen($_POST['nombre1']) < 2) {
            echo '<p>Something went wrong</p>';
        } else {
            $nombre = filter_var($_POST['nombre1'], FILTER_SANITIZE_STRING);
        }
    }

    if(isset($_POST['correo1']) && $_POST['correo1'] != '') {
        $correo = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['correo1']);
        $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);
    }

    if($_POST['telefono1'] == '' || (strlen($_POST['telefono1']) < 16) ) {
        $telefono = $_POST['telefono1'];
    }

    $contacto = "contacto";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    //.'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $contacto . "\r\n";

    // Datos para el correo
    $destinatario = "upalacios@richit.ai, gmanzanares@richit.ai";
    $asunto = "Recursos pagina RICH IT - Modelado de datos";

    $contenido= "";
    $contenido .= "Nombre: " . $nombre . "\r\n";
    $contenido .= "Correo: " . $correo . "\r\n";
    $contenido .= "Teléfono: " . $telefono . "\r\n" ;


    if(mail($destinatario, $asunto, $contenido, $headers)) {
      header("Location: http://richit.ai/es/recursos.html");
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}

?>
