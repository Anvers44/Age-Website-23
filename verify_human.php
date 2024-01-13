<?php
session_start(); // Démarrez la session pour stocker le nombre d'envois

// Vérification du nombre maximal d'envois par utilisateur
if (!isset($_SESSION['form_submission_count'])) {
    $_SESSION['form_submission_count'] = 0;
}

if ($_SESSION['form_submission_count'] >= 3) {
    // Limitez à deux envois par utilisateur
    echo json_encode(array('success' => false, 'msg' => 'Limite d\'envoi atteinte. Réessayez plus tard.'));
    exit;
}

// Vérification reCAPTCHA
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['g-recaptcha-response'])) {
    $token = $_POST['g-recaptcha-response'];
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => '6Leo90IpAAAAAARCVGFy2jdeGfTUL82OS6xvHN10',
        'response' => $token
    );

    $options = array(
        'http' => array (
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $response = json_decode($result);

    /*
    - google response score is between 0.0 to 1.0
    - if score is 0.5, it's a human
    - if score is 0.0, it's a bot
    - google recommend to use score 0.5 for verify human
    */
    if ($response->success && $response->score >= 0.5) {
        // Incrémentation du compteur d'envois
        $_SESSION['form_submission_count']++;

        echo json_encode(array('success' => true, "msg" => "Vous n'êtes pas un robot!", "response" => $response));
    } else {
        // Gestion des faibles scores reCAPTCHA
        echo json_encode(array('success' => false, "msg" => "Vous êtes un robot!"));
    }
} else {
    // Retourner une erreur si la requête n'est pas POST ou si 'g-recaptcha-response' n'est pas défini
    echo json_encode(array('success' => false, 'msg' => 'Méthode de requête non autorisée.'));
}
?>
