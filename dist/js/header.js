'use strict';

var btnSearch = document.querySelector('.btn-search');
var searchInput = document.querySelector('#input-search');
var btnMenu = document.querySelector('#btn-menu');
var headerFixed = document.querySelector('.header-fixed');
var focusElem = function focusElem(el) {
  el.focus();
};
var submitSearch = function submitSearch() {
  document.getElementById('search').submit();
};
var toggleSearchBox = function toggleSearchBox() {
  btnSearch.classList.toggle('is-active');
};
var toggleMenu = function toggleMenu() {
  headerFixed.classList.toggle('is-active');
};

// search button
btnSearch.addEventListener('click', function (e) {
  if (e.currentTarget.classList.contains('is-active')) {
    return searchInput.value !== '' ? submitSearch() : toggleSearchBox();
  }
  setTimeout(function () {
    focusElem(searchInput);
  }, 300);
  toggleSearchBox();
});

// 手機版 menu button
btnMenu.addEventListener('click', function (e) {
  toggleMenu();
});