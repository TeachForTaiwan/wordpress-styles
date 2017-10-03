'use strict';

// 我們怎麼做 TAB funcstions
var getPosition = function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
};

document.addEventListener('DOMContentLoaded', function () {
  var tabControlAside = document.querySelector('.tab-control--aside');
  var tabControlOffsetTop = getPosition(document.querySelector('.tab-control')).y || 0;
  var tabButtons = document.querySelectorAll('.tab-control .tab-button');
  var tabContents = document.querySelectorAll('.tab-content');
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

  window.addEventListener('load', function () {
    tabControlOffsetTop = getPosition(document.querySelector('.tab-control')).y || 0;
  });

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var currentFor = e.currentTarget.dataset.for;
      var activeBtns = document.querySelectorAll('.tab-button[data-for=' + currentFor + ']');
      switchTab(e);
      switchButtonActive();
      activeBtns.forEach(function (el) {
        el.classList.add('is-active');
      });
      document.documentElement.scrollTop = tabControlOffsetTop;
    });
  });

  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > tabControlOffsetTop) {
      tabControlAside.classList.add('is-active');
    } else {
      tabControlAside.classList.remove('is-active');
    }
  });
});