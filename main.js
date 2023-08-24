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


const slider = document.querySelector('.slider');
const slide = document.getElementById('slide');
const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const flecheGauche = document.querySelector('.fleche .flechClick:first-child');
const flecheDroite = document.querySelector('.fleche .flechClick:last-child');
let widthPx;

// Fonction pour mettre à jour la largeur du slider
function updateWidth() {
  const computedStyle = getComputedStyle(slide);
  const widthPercentage = parseFloat(computedStyle.width);
  widthPx = widthPercentage + 40;
}

// Appel initial pour mettre à jour la largeur
updateWidth();

flecheGauche.addEventListener('click', previousSlide);
flecheDroite.addEventListener('click', nextSlide);
window.addEventListener('resize', updateWidth); // Utilisez la fonction updateWidth ici

let activeIndex = 1;

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  const translateX = -activeIndex * widthPx;
  slider.style.transform = `translateX(${translateX}px)`;

  items.forEach(item => item.classList.remove('active'));
  items[activeIndex].classList.add('active');
}

function goToSlide(index) {
  activeIndex = (index + itemCount) % itemCount;
  updateSlider();
}

function nextSlide() {
  goToSlide(activeIndex + 1);
}

function previousSlide() {
  goToSlide(activeIndex - 1);
}

// Utilisez ces fonctions pour déplacer le slider
// Par exemple : nextSlide() pour passer à l'élément suivant
//              previousSlide() pour revenir à l'élément précéden


let burger = document.getElementById('burger');
let navMobil = document.getElementById('navBurger');
let navDash = document.getElementById('croix');
burger.addEventListener('click', function(){
  navMobil.classList.add('burgerActive');
  burger.classList.add('burgerActive');
})

navDash.addEventListener('click', function(){
  navMobil.classList.remove('burgerActive');
  burger.classList.remove('burgerActive');
})