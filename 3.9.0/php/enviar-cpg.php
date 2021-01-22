<?php

// Validacion de que los valores no estan vacios
if(empty($_POST["nombre"]) || empty($_POST["correo"])){
  die ("Es necesario completar estos campos");
}

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];

if(empty($nombre) || empty($correo)){
  die ("Es necesario completar estos campos");
}

$contenido = "Nombre: " . $nombre . "<br>Correo: " . $correo . "<br>Teléfono: " . $telefono ;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'upalacios@richit.ai';                 // SMTP username
    $mail->Password = '9juankis9';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('upalacios@richit.ai', 'Formulario proveniente de CPG');
    $mail->addAddress('upalacios@richit.ai');
    $mail->addAddress('gmanzanares@richit.ai');
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('../images/slider.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Formulario Web RICHIT';
    $mail->Body    = $contenido; //'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    //echo 'El mensaje se envió correctamente';
    header("Location: http://richit.ai/es/");
} catch (Exception $e) {
    echo 'hubo un error al enviarse';
    echo 'Mailer mando Error: ' . $mail->ErrorInfo;
}

?>
