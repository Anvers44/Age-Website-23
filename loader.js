
document.addEventListener("DOMContentLoaded", function() {


// Afficher le loader
document.querySelector('.loader').style.display = 'flex';

// Simuler une tâche longue (à remplacer par le chargement réel de votre contenu)
setTimeout(function() {
    // Masquer le loader
    document.querySelector('.loader').style.display = 'none';
    // Afficher le contenu
    document.querySelector('.content').style.display = 'block';
}, 2000); // 2000 millisecondes (2 secondes) pour simuler un chargement



});

