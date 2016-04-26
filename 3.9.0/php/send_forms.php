<?php
include_once('class.phpmailer.php');

function send_form($userEmail, $userName, $subject, $body, $file){
    
    $mail = new PHPMailer();   

    //indico a la clase que use SMTP
    $mail->IsSMTP();
    //permite modo debug para ver mensajes de las cosas que van ocurriendo
    $mail->SMTPDebug = 0;
    //Debo de hacer autenticación SMTP
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    //indico el servidor de Gmail para SMTP
    $mail->Host = "smtp.gmail.com";
    //indico el puerto que usa Gmail
    $mail->Port = 465;
    //indico un usuario / clave de un usuario de gmail
    $mail->Username = "vmaceda@richit.com.mx";
    $mail->Password = "soporte_richit";
    $mail->SetFrom('soporte@richit.com.mx', 'RichIT - website');
    $mail->AddReplyTo($userEmail, $userName);
    $mail->Subject = $subject;

    $mail->IsHTML(true);
    $mail->MsgHTML($body);
    //indico destinatario
    //$address = "contacto@richit.com.mx";
    $address = "vmaceda29@gmail.com.mx";
    $mail->AddAddress($address, "Contacto Rich IT ");
    $mail->CharSet = 'UTF-8';
    if(!$mail->Send()) {
        $dataResponse = array('type' => 'error', 'text' => $formError);
        echo json_encode($dataResponse);
    } else {
        $dataResponse = array('response' => 'success', 'text' => 'Gracias :)');
        echo json_encode($dataResponse);
    }
}


?>