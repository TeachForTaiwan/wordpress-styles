'use strict';

var header = document.querySelector('.header');
var btnMenu = document.querySelector('#m-btn-menu');
var navItemList = header.querySelectorAll('.item');
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

[].forEach.call(navItemList, function (item) {
  item.addEventListener('click', function (e) {
    var curLink = e.currentTarget.querySelector('.link');
    if (curLink.href !== 'javascript:;') {
      header.classList.remove('is-open');
    }
  });
});

window.addEventListener('scroll', function () {
  if (document.body.scrollTop <= 100) {
    toggleNavbar('hide');
  } else {
    toggleNavbar('show');
  }
});