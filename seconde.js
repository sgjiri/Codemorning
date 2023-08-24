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