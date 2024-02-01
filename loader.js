document.addEventListener("DOMContentLoaded", function () {
  // Vérifier si 'visited' existe dans localStorage
  if (!localStorage.getItem("visited")) {
    // Afficher le loader
    document.querySelector(".loader").style.display = "flex";

    // Simuler une tâche longue (à remplacer par le chargement réel de votre contenu)
    setTimeout(function () {
      // Masquer le loader
      document.querySelector(".loader").style.display = "none";
      // Afficher le contenu
      document.querySelector(".content").style.display = "block";

      // Définir 'visited' dans localStorage pour indiquer que le visiteur a déjà visité le site
      localStorage.setItem("visited", true);
    }, 2000); // 2000 millisecondes (2 secondes) pour simuler un chargement
  } else {
    // Si le visiteur a déjà visité le site, afficher directement le contenu
    document.querySelector(".content").style.display = "block";
  }
});
