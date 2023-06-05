const hambuger = document.querySelector('.hamburger');
const navigationNav = document.querySelector('.navigation-nav');
  
hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('active');
    navigationNav.classList.toggle('active');
});

function scrollToElement(myElement) {
    const element = document.getElementById(myElement);
    if (element) {
      element.scrollIntoView({ behavior:'smooth'});
    }
  }
