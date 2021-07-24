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


upButton = document.querySelector('.scroll-up-link');

window.onscroll = () => scrollFunction();

scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.classList.add('scroll-up-link-showed');
  } else {
    upButton.classList.remove('scroll-up-link-showed');
  }
}
