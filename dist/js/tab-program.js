'use strict';

// 我們怎麼做 TAB functions
/* global Stickyfill, jQuery */
document.addEventListener('DOMContentLoaded', function () {
  var tabControl = document.querySelector('.tab-control');
  var tabButtons = tabControl.querySelectorAll('.tab-button');
  var tabContents = document.querySelectorAll('.tab-content');
  var stickyChilds = document.querySelectorAll('.sticky-child');
  var docEl = document.documentElement || document.body;
  var removeActive = function removeActive(el) {
    el.classList.remove('is-active');
  };
  var switchTab = function switchTab(e) {
    var targetContent = document.querySelector('.' + e.currentTarget.dataset.for);
    tabContents.forEach(removeActive);
    targetContent.classList.add('is-active');
  };

  stickyChilds.forEach(function (child) {
    child.parentNode.classList.add('sticky');
  });
  var stickyElems = document.querySelectorAll('.sticky');
  Stickyfill.add(stickyElems);

  // hard code to change tabControl(sticky)'s bgColor
  tabControl.parentNode.parentNode.style.backgroundColor = 'rgba(255,255,255,.85)';

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var currentFor = e.currentTarget.dataset.for;
      var activeBtn = document.querySelector('.tab-button[data-for=' + currentFor + ']');
      var headerH = document.querySelector('header').offsetHeight;
      var controlBarH = tabControl.offsetHeight;

      switchTab(e);
      tabButtons.forEach(removeActive);
      activeBtn.classList.add('is-active');
      var contentOffset = document.querySelector('.tab-content.is-active').offsetTop;

      jQuery.Velocity(docEl, 'scroll', {
        duration: 700,
        offset: contentOffset - headerH - controlBarH - 20,
        easing: 'ease-in-out'
      });
    });
  });
});