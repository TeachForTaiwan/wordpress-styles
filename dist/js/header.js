'use strict';

var header = document.querySelector('.header');
var btnMenu = document.querySelector('#m-btn-menu');
var toggleNavbar = function toggleNavbar(func) {
  if (func === 'hide') {
    header.classList.remove('is-active');
  }
  if (func === 'show') {
    header.classList.add('is-active');
  }
};

btnMenu.addEventListener('click', function () {
  header.classList.toggle('is-open');
});

window.addEventListener('scroll', function () {
  if (document.body.scrollTop <= 100) {
    toggleNavbar('hide');
  } else {
    toggleNavbar('show');
  }
});