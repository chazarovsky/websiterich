<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if($_POST) {
    $nombre = "";
    $correo = "";
    $telefono = "";
    $mensaje = "";

    if(isset($_POST['nombre-Contacto-RSP']) && $_POST['nombre-Contacto-RSP'] != '') {
        if (strlen($_POST['nombre-Contacto-RSP']) > 35 || strlen($_POST['nombre-Contacto-RSP']) < 2) {
            echo '<p>Something went wrong</p>';
        } else {
            $nombre = filter_var($_POST['nombre-Contacto-RSP'], FILTER_SANITIZE_STRING);
        }
    }

    if(isset($_POST['correo-Contacto-RSP']) && $_POST['correo-Contacto-RSP'] != '') {
        $correo = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['correo-Contacto-RSP']);
        $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);
    }

    if($_POST['telefono-Contacto-RSP'] == '' || (strlen($_POST['telefono-Contacto-RSP']) < 16) ) {
        $telefono = $_POST['telefono-Contacto-RSP'];
    }

    if(isset($_POST['texto-Contacto-RSP'])) {
        $mensaje = htmlspecialchars($_POST['texto-Contacto-RSP']);
    }

    $contacto = "contacto";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    //.'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $contacto . "\r\n";

    // Datos para el correo
    $destinatario = "upalacios@richit.ai, gmanzanares@richit.ai";
    $asunto = "Contacto pagina RSP RICH IT";

    $contenido= "";
    $contenido .= "Nombre: " . $nombre . "\r\n";
    $contenido .= "Correo: " . $correo . "\r\n";
    $contenido .= "Teléfono: " . $telefono . "\r\n";
    $contenido .= "Notas: " . $mensaje . "\r\n";


    if(mail($destinatario, $asunto, $contenido, $headers)) {
      header("Location: http://richit.ai/es/contacto-conver-rsp.html");
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}

?>
