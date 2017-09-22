'use strict';

// 我們怎麼做 TAB funcstions
document.addEventListener('DOMContentLoaded', function () {
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

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      switchTab(e);
      switchButtonActive();
      btn.classList.add('is-active');
    });
  });
});