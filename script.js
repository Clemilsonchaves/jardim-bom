const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})




const linkToTop = document.querySelector('#scroll-to-top');
const sobre = document.querySelector('#sobre');

linkToTop.addEventListener('click', function(event) {
  event.preventDefault();
  sobre.scrollTop = 0;
  sobre.scrollIntoView({ behavior: 'smooth' });
});


const footerToTop = document.querySelector('#nav-link');
const contato = document.querySelector('#footer');

footerToTop.addEventListener('click', function(event) {
  event.preventDefault();
  footer.scrollTop = 0;
  footer.scrollIntoView({ behavior: 'smooth' });
});






