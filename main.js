// Sélectionnez le menu sticky
let menu = document.getElementById('header');
let logo = document.getElementById('pLogo');
let scrolled = document.getElementsByClassName('scroll')


// Ajoutez une classe lorsque l'utilisateur fait défiler la page

for(i=0;i<scrolled.length;i++){
    (function (index) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          menu.classList.add('scrolled');  
          scrolled[index].classList.add('scrolled');
        } else {
          menu.classList.remove('scrolled');
          scrolled[index].classList.remove('scrolled');
        }
      });
    })(i);
}

function recalculerValeurs() {
    let ronds = document.getElementsByClassName('circle');

    for (let i = 0; i < ronds.length; i++) {
        let computedStyle = getComputedStyle(ronds[i]);
        let widthPercentage = parseFloat(computedStyle.width);
        ronds[i].style.height = widthPercentage + 'px';
    }
}

// Appeler la fonction une première fois pour calculer les valeurs initiales
recalculerValeurs();

// Écouter l'événement de redimensionnement de la fenêtre et rappeler la fonction
window.addEventListener('resize', recalculerValeurs);