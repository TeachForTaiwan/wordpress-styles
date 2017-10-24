'use strict';

var btnSearch = document.querySelector('.btn-search');
var searchInput = document.querySelector('#input-search');
var btnMenu = document.querySelector('#btn-menu');
var header = document.querySelector('#header');
var headerNav = document.querySelector('#nav-menu');
var menuPrimary = document.querySelector('#menu-primary');
var menuMask = document.querySelector('#menu-mask');
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
  headerNav.classList.toggle('is-active');
};
var fixMenuPrimary = function fixMenuPrimary() {
  menuPrimary.classList.add('is-fixed');
  headerNav.classList.add('is-fixed');
  document.body.classList.add('has-fixed-top');
};
var unfixMenuPrimary = function unfixMenuPrimary() {
  menuPrimary.classList.remove('is-fixed');
  headerNav.classList.remove('is-fixed');
  document.body.classList.remove('has-fixed-top');
};
var toggleMask = function toggleMask() {
  menuMask.classList.toggle('is-active');
};
var fixHeader = function fixHeader() {
  header.classList.add('is-fixed');
  document.body.classList.add('has-fixed-top');
};
var unfixHeader = function unfixHeader() {
  header.classList.remove('is-fixed');
  document.body.classList.remove('has-fixed-top');
};
var removeLink = function removeLink(className) {
  document.querySelectorAll(className).forEach(function (el) {
    el.removeAttribute('href');
  });
};

// search button
if (btnSearch) {
  btnSearch.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('is-active')) {
      return searchInput.value !== '' ? submitSearch() : toggleSearchBox();
    }
    setTimeout(function () {
      focusElem(searchInput);
    }, 300);
    toggleSearchBox();
    return true;
  });
}

// 手機版 menu button
if (btnMenu) {
  btnMenu.addEventListener('click', function () {
    toggleMenu();
    toggleMask();
  });
}

window.addEventListener('scroll', function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (window.innerWidth >= 900) {
    if (scrollTop > 100) {
      fixMenuPrimary();
    } else {
      unfixMenuPrimary();
    }
    return;
  }
  if (scrollTop > 100) {
    fixHeader();
  } else {
    unfixHeader();
  }
});

window.addEventListener('resize', function () {
  window.innerWidth < 900 ? unfixMenuPrimary() : unfixHeader();
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 900) {
    removeLink('.has-sub');
  }
});