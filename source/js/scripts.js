import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

// Mobile menu toggler

const navigation = document.querySelector('.page-navigation');
const toggler = navigation.querySelector('.page-navigation__toggle');
const navbar = navigation.querySelector('.page-navigation__list');
const links = navigation.querySelectorAll('.page-navigation__item');

const toggleMenu = () => {
  toggler.classList.toggle('page-navigation__toggle--open');
  navbar.classList.toggle('page-navigation__list--open');
  navigation.classList.toggle('page-navigation--open');
  checkMenuStatus();
}

toggler.addEventListener ('click', toggleMenu);

const checkMenuStatus = () => {
  if (toggler.classList.contains('page-navigation__toggle--open')) {
    links.forEach(link => link.addEventListener ('click', toggleMenu));
  } else {
    links.forEach(link => link.removeEventListener ('click', toggleMenu));
  }
};

// Scroll-up Button

const upButton = document.querySelector('.scroll-up-link');

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    upButton.classList.add('scroll-up-link-showed');
  } else {
    upButton.classList.remove('scroll-up-link-showed');
  }
}

// Slider

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 500,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  pauseOnMouseEnter: true,
  },
});

