<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $societe = htmlspecialchars($_POST["societe"]);
    $message = htmlspecialchars($_POST["message"]);

    // Validation supplémentaire pour l'e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Veuillez saisir une adresse e-mail valide.");
    }

    // Validation supplémentaire pour le nom (par exemple, uniquement des lettres)
    if (!preg_match("/^[A-Za-z\s]+$/", $nom)) {
        die("Veuillez saisir un nom valide (uniquement des lettres et des espaces).");
    }

    // Vous pouvez ajouter d'autres validations supplémentaires ici.

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
}
?>
