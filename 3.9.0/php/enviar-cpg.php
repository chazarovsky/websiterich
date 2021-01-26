<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if($_POST) {
    $nombre = "";
    $cargo = "";
    $correo = "";
    $telefono = "";

    if(isset($_POST['nombre-CPG']) && $_POST['nombre-CPG'] != '') {
        if (strlen($_POST['nombre-CPG']) > 35 || strlen($_POST['nombre-CPG']) < 2) {
            echo '<p>Something went wrong</p>';
        } else {
            $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
        }
    }

    if(isset($_POST['correo-CPG']) && $_POST['correo-CPG'] != '') {
        $correo = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['correo-CPG']);
        $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);
    }

    if($_POST['telefono-CPG'] == '' || (strlen($_POST['telefono-CPG']) < 16) ) {
        $telefono = $_POST['telefono-CPG'];
    }

    $contacto = "contacto";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    //.'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $contacto . "\r\n";

    // Datos para el correo
    $destinatario = "upalacios@richit.ai, gmanzanares@richit.ai";
    $asunto = "Contacto Campaña CPG Analytics";

    $contenido= "";
    $contenido .= "Nombre: " . $nombre . "\r\n";
    $contenido .= "Correo: " . $correo . "\r\n";
    $contenido .= "Teléfono: " . $telefono . "\r\n" ;


    if(mail($destinatario, $asunto, $contenido, $headers)) {
      header("Location: http://richit.ai/es/");
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}

?>
