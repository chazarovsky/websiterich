<?php

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data; }

$contactEmail2 = 'vmaceda@richit.com.mx';

$name = $email =  $comment = $subject = $formError = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $formError = "Tu nombre es necesario";
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $formError = "Solo letras y espacios en el nombre";
        }
    }

    if (empty($_POST["email"])) {
        $formError = "Tu Email es necesario";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $formError = "Email invalido";
        }
    }

    if (empty($_POST["subject"])) {
        $subject = "Contact Richit";
    } else {
        $comment = test_input($_POST["subject"]);
    }

    if (empty($_POST["message"])) {
        $comment = "";
    } else {
        $comment = test_input($_POST["message"]);
    }

    if($formError != ""){
        $dataResponse = array('type' => 'error', 'text' => $formError);
        echo json_encode($dataResponse);
    } else {
        $contactMessage = "Nombre: " . $name
                        . "\nEmail: " . $email
                        . "\nMensaje: " . $comment;
        mail($contactEmail, $subject, $contactMessage);
        $dataResponse = array('response' => 'success', 'text' => 'Gracias :)');
        echo json_encode($dataResponse);
    }
}

?>