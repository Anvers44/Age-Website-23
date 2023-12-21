
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

  

  document.addEventListener("DOMContentLoaded", function() {


    const navbar = document.getElementById('navbar');
  let isNavbarVisible = true;
  let lastScrollPosition = 0;

  window.addEventListener('scroll', function () {
    const scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > lastScrollPosition && scrollPosition > 120 && isNavbarVisible) {
      navbar.style.top = '-9.6vh'; // Masquer la barre de navigation
      isNavbarVisible = false;
    } else if ((scrollPosition <= lastScrollPosition || scrollPosition <= 120) && !isNavbarVisible) {
      navbar.style.top = '0'; // Afficher la barre de navigation
      isNavbarVisible = true;
    }

    lastScrollPosition = scrollPosition;

    
  });


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




document.addEventListener('DOMContentLoaded', function() {
  var counterElements = document.querySelectorAll('.chiffre div');

  var options = {
    threshold: 0.5 // L'élément est considéré comme visible lorsque 50% ou plus est visible
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target); // Arrêter d'observer une fois que l'élément est visible
        setTimeout(function() {
          startIncrement(entry.target);
        }, 100); // Délai de 1 seconde avant le début de l'animation
      }
    });
  }, options);

  // Observer chaque élément
  counterElements.forEach(function(element) {
    observer.observe(element);
  });

  function incrementCounter(element, finalValue, prefix, duration) {
    var startTime = null;

    function updateCounter(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
      var newValue = Math.round(easedProgress * finalValue);

      // Ajoute le préfixe et met à jour le nombre
      element.textContent = prefix + newValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function startIncrement(element) {
    var finalValue = parseInt(element.querySelector('h4').getAttribute('data-final-value'), 10);
    var prefix = element.querySelector('h4').getAttribute('data-prefix');
    var duration = 1000; // Durée pour chaque élément
    incrementCounter(element.querySelector('h4'), finalValue, prefix, duration);
  }
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlink");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navlink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}






