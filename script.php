
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Hier kun je je e-maillogica toevoegen
    $to = 'info@theartoftaste.eu';
    $subject = 'Nieuw contactformulier';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mailBody = "Naam: $name\n";
    $mailBody .= "Telefoonnummer: $phone\n";
    $mailBody .= "E-mail: $email\n";
    $mailBody .= "Bericht: $message\n";

    mail($to, $subject, $mailBody, $headers);
}
?>

