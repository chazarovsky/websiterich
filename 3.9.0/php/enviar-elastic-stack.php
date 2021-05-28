<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if($_POST) {
    $nombre = "";
    $correo = "";
    $telefono = "";


    if(isset($_POST['nombre15']) && $_POST['nombre15'] != '') {
        if (strlen($_POST['nombre15']) > 35 || strlen($_POST['nombre15']) < 2) {
            echo '<p>Something went wrong</p>';
        } else {
            $nombre = filter_var($_POST['nombre15'], FILTER_SANITIZE_STRING);
        }
    }

    if(isset($_POST['correo15']) && $_POST['correo15'] != '') {
        $correo = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['correo15']);
        $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);
    }

    if($_POST['telefono15'] == '' || (strlen($_POST['telefono15']) < 16) ) {
        $telefono = $_POST['telefono15'];
    }

    $contacto = "contacto";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    //.'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $contacto . "\r\n";

    // Datos para el correo
    $destinatario = "upalacios@richit.ai, gmanzanares@richit.ai";
    $asunto = "Recursos pagina RICH IT - Video Elastic Stack";

    $contenido= "";
    $contenido .= "Nombre: " . $nombre . "\r\n";
    $contenido .= "Correo: " . $correo . "\r\n";
    $contenido .= "Teléfono: " . $telefono . "\r\n" ;


    if(mail($destinatario, $asunto, $contenido, $headers)) {
      header("Location: http://richit.ai/es/v-i.html");
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}

?>
