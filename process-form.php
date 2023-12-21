<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $societe = htmlspecialchars($_POST["societe"]);
    $message = htmlspecialchars($_POST["message"]);

    // Ajoutez vos validations et traitement du formulaire ici

    $to = "bileldjebar@gmail.com"; // Remplacez par votre adresse Gmail
    $subject = "Nouveau formulaire de contact";
    $messageBody = "Nom: $nom\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Société: $societe\n";
    $messageBody .= "Message:\n$message";

    // En-têtes pour l'e-mail
    $headers = "From: $email";

    // Envoyer l'e-mail
    mail($to, $subject, $messageBody, $headers);

    // Vous pouvez renvoyer une réponse si nécessaire
    echo "success";
}
?>
