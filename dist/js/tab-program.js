'use strict';

// 我們怎麼做 TAB functions
// const getPosition = (element) => {
//   let xPosition = 0;
//   let yPosition = 0;

//   while (element) {
//     xPosition += ((element.offsetLeft - element.scrollLeft) + element.clientLeft) || 0;
//     yPosition += ((element.offsetTop - element.scrollTop) + element.clientTop) || 0;
//     element = element.offsetParent;
//   }

//   return { x: xPosition, y: yPosition };
// };

document.addEventListener('DOMContentLoaded', function () {
  var tabControl = document.querySelector('.tab-control');
  var tabButtons = document.querySelectorAll('.tab-control .tab-button');
  var tabContents = document.querySelectorAll('.tab-content');
  var stickyChild = document.querySelector('.sticky-child');
  var docEl = document.documentElement || document.body;
  // let tabControlOffsetTop = (tabControl.getBoundingClientRect().top + window.scrollY) - 80;
  var hideAll = function hideAll() {
    tabContents.forEach(function (content) {
      content.classList.remove('is-active');
    });
  };
  var switchButtonActive = function switchButtonActive() {
    tabButtons.forEach(function (btn) {
      btn.classList.remove('is-active');
    });
  };
  var switchTab = function switchTab(e) {
    var targetContentClass = e.currentTarget.dataset.for;
    var targetContent = document.querySelector('.' + targetContentClass);
    hideAll();
    targetContent.classList.add('is-active');
  };
  var addStickyEl = function addStickyEl(childEl) {
    childEl.parentNode.classList.add('sticky');
  };

  window.addEventListener('load', function () {
    // tabControlOffsetTop = getPosition(tabControl).y + 125 || 0;
    // tabControlOffsetTop = (tabControl.getBoundingClientRect().top + window.scrollY) - 120;
  });
  /* global Stickyfill, jQuery */
  addStickyEl(stickyChild);
  var stickyElems = document.querySelectorAll('.sticky');
  Stickyfill.add(stickyElems);

  // change tabControl(sticky) bg style
  tabControl.parentNode.parentNode.style.backgroundColor = 'rgba(255,255,255,.85)';

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var currentFor = e.currentTarget.dataset.for;
      var activeBtn = document.querySelector('.tab-button[data-for=' + currentFor + ']');

      switchTab(e);
      switchButtonActive();
      activeBtn.classList.add('is-active');
      jQuery.Velocity(docEl, 'scroll', { offset: 800 }, 1000);
    });
  });
});