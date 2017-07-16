const header = document.querySelector('.header');
const btnMenu = document.querySelector('#m-btn-menu');
const toggleNavbar = (func) => {
  if (func === 'hide') {
    header.classList.remove('is-active');
  }
  if (func === 'show') {
    header.classList.add('is-active');
  }
};

btnMenu.addEventListener('click', () => {
  header.classList.toggle('is-open');
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop <= 100) {
    toggleNavbar('hide');
  } else {
    toggleNavbar('show');
  }
});
