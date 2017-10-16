'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var configMobile = {
  pagination: '.swiper-pagination',
  slidesPerView: 1,
  slidesPerColumn: 2,
  paginationClickable: true,
  spaceBetween: 30,
  grabCursor: true,
  observer: true
};
var configTablet = {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 3,
  slidesPerColumn: 2,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  grabCursor: true,
  observer: true
};
var configDesktop = {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 4,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  grabCursor: true,
  observer: true
};
var getSwiperConfig = function getSwiperConfig(ww) {
  if (ww < 600) {
    return configMobile;
  }
  if (ww < 900) {
    return configTablet;
  }
  if (ww >= 900) {
    return configDesktop;
  }
  return false;
};

/* eslint no-unused-vars:0 */
/* global Swiper */
var swiper = new Swiper('.swiper-container', _extends({}, getSwiperConfig(window.innerWidth), {
  onAfterResize: function onAfterResize(s) {
    swiper.params = getSwiperConfig(window.innerWidth);
    s.update();
  }
}));