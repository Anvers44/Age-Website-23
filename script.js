/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
} 




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

