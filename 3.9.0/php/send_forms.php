<?php
include_once('class.phpmailer.php');

function send_form($userEmail, $userName, $subject, $body, $file){

    $mail = new PHPMailer();

    //indico a la clase que use SMTP
    $mail->IsSMTP();
    //permite modo debug para ver mensajes de las cosas que van ocurriendo
    $mail->SMTPDebug = 2;
    //Debo de hacer autenticación SMTP
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    //indico el servidor de Gmail para SMTP
    $mail->Host = "smtp.gmail.com";
    //indico el puerto que usa Gmail
    $mail->Port = 465;
    //indico un usuario / clave de un usuario de gmail
    $mail->Username = "richit.mailsender@gmail.com";
    $mail->Password = "richit2017";
    $mail->SetFrom('richit.mailsender', 'RichIT - website');
    $mail->AddReplyTo($userEmail, $userName);
    $mail->Subject = $subject;

    $mail->IsHTML(true);
    $mail->MsgHTML($body);
    //indico destinatario
    $address = "perezrubi@richit.ai";
    $mail->AddAddress($address, "Contacto Rich IT ");
    $mail->CharSet = 'UTF-8';
    if(!$mail->Send()) {
        echo $mail->ErrorInfo;
        if($formError == "") $formError = " ";
        $dataResponse = $mail->ErrorInfo;
        /*$dataResponse = array('type' => 'error', 'text' => $formError);*/
        echo json_encode($dataResponse);
    } else {
        $dataResponse = array('response' => 'success', 'text' => 'Gracias :)');
        echo json_encode($dataResponse);
    }
}


?>
