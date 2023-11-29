document.addEventListener("DOMContentLoaded", function() {
  // Afficher le loader
  document.querySelector('.loader').style.display = 'flex';

  // Simuler une tâche longue (à remplacer par le chargement réel de votre contenu)
  setTimeout(function() {
      // Masquer le loader
      document.querySelector('.loader').style.display = 'none';
      // Afficher le contenu
      document.querySelector('.content').style.display = 'block';
  }, 4500); // 2000 millisecondes (2 secondes) pour simuler un chargement
});




    function afficherTableau(idTableau,idBouton) {
    // Masquer tous les tableaux
    var tousLesTableaux = document.querySelectorAll('.table-link');
    tousLesTableaux.forEach(function(tableau) {
      tableau.style.display = 'none';
    });

    // Afficher le tableau spécifié
    var tableauAAfficher = document.getElementById(idTableau);
    tableauAAfficher.style.display = 'block'; // Utilisez 'block' au lieu de 'table' pour les div.

    var tousLesBoutons = document.querySelectorAll('button');
    tousLesBoutons.forEach(function(bouton) {
      bouton.classList.remove('selected-button');
    });

    var boutonSelectionne = document.getElementById(idBouton);
    boutonSelectionne.classList.add('selected-button');
  }



  document.addEventListener("DOMContentLoaded", function () {
    const chiffreContainer = document.getElementById("chiffre");
    const chiffreSpans = chiffreContainer.querySelectorAll("h4 span");

    chiffreSpans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("active");
        }, index * 500); // Définissez la durée souhaitée entre chaque chiffre
    });
});

