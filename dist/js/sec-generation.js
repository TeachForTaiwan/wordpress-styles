'use strict';

var swiperConfig1 = {
  pagination: '.swiper-pagination',
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  grabcursor: true
};

var swiperConfig2 = {
  pagination: '.swiper-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  grabcursor: true
};

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 600) {
    var swiper = new Swiper('.swiper-container', swiperConfig1);
    console.log('teste1');
  } else {
    var _swiper = new Swiper('.swiper-container', swiperConfig2);
    console.log('hey apple');
  }
});