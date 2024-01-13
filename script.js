
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




//function Burger menu for mobile

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






  



// Fonction pour envoyer le formulaire
function sendForm() {
  let isValid = validerFormulaire();

  if (isValid) {
      // Validation réussie, appel de la fonction reCAPTCHA
      grecaptcha.execute();
  }
}





//function Send email contact

function SendMail(){

  var params = {
    from_name : document.getElementById('name').value,
    email_id : document.getElementById('email').value,
    socity : document.getElementById('socity').value,
    message : document.getElementById('message').value,

  }
  emailjs.send('service_rcrnxiz', 'template_chln3se' , params).then(function(res){
      //alert("Mail send ! " + res.status)
      if (res.status == "200"){
        document.getElementById('submitBtn').style.backgroundColor='green'
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('socity').value = "";
        document.getElementById('message').value = "";
      }
      else{
        document.getElementById('submitBtn').style.backgroundColor='red'
        alert("Mail not send ! " + res.status)
      }
  })
}





//function Gcaptcha check

function onSubmit(token,valide) {
  fetch('verify_human.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `g-recaptcha-response=${token}`
  })
      .then(response => response.json())
      .then(data => {
          if (data.success && data.score >= 0.5) {
              // process to next request after success user is human
              console.log('Success', data);
              SendMail()
          } else {
              // process to next request after failed user is not human
              console.error('Erreur de vérification reCAPTCHA', data);
          }
      })
      .catch(error => {
          console.error('Client Side Error', error);
      });
      
  }



function validerFormulaire() {
  let btn = document.getElementById('submitbtn')
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let socity = document.getElementById('socity').value;
  let message = document.getElementById('message').value;

  let namestate ;
  let emailstate;
  let socitystate;
  let messagestate;

    
   
    // Vérification du format de l'e-mail
  let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  if (!emailFormat.test(email)) {
    document.getElementById('email').style.borderBottom =".4vh solid darkred"
      document.getElementById('email').placeholder  = 'Veuillez saisir une adresse e-mail valide.'
      emailstate = false
      }else{
    document.getElementById('email').style.borderBottom =".4vh solid green"
    emailstate = true
  }


 if (name ===""){
  document.getElementById('name').style.borderBottom =".4vh solid darkred"
    document.getElementById('name').placeholder  = 'Veuillez saisir un Nom.'
    namestate = false
    
 } else{
  document.getElementById('name').style.borderBottom =".4vh solid green" 
  namestate = true
 }

 if (socity ===""){
  document.getElementById('socity').style.borderBottom =".4vh solid darkred"
    document.getElementById('socity').placeholder  = 'Veuillez saisir une Société.'

    socitystate = false
    
 }  else{
  document.getElementById('socity').style.borderBottom =".4vh solid green"
  socitystate = true
 }


 if (message ===""){
  document.getElementById('message').style.border =".4vh solid darkred"
    document.getElementById('message').placeholder  = 'Veuillez saisir un Message.'
    messagestate = false
 }  else{
  document.getElementById('message').style.border =".4vh solid green"
  messagestate = true
 }
 if (namestate == true && emailstate == true && socitystate == true && messagestate == true ){
        let valide = true
        
 }else{
        valide = false
 }
   return valide

}

document.getElementById('submitBtn').addEventListener('click', sendForm);
