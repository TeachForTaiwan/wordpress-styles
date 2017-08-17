'use strict';

var rmClass = function rmClass(el, cName) {
  el.classList.remove(cName);
};

var closeTabs = function closeTabs() {
  var tabs = document.querySelectorAll('.org-container .org-content');
  var orgItems = document.querySelectorAll('.org-container .item');
  [].forEach.call(tabs, function (tab) {
    rmClass(tab, 'is-active');
  });
  [].forEach.call(orgItems, function (item) {
    rmClass(item, 'is-active');
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var org = document.querySelector('.org-container');
  var orgTabs = org.querySelectorAll('.item');
  [].forEach.call(orgTabs, function (tab) {
    tab.addEventListener('click', function (e) {
      if (e.currentTarget.classList.contains('is-active')) {
        closeTabs();
        return;
      }
      var targetId = e.currentTarget.dataset.id;
      var targetEl = document.getElementById(targetId);
      closeTabs();
      e.currentTarget.classList.add('is-active');
      targetEl.classList.add('is-active');
    });
  });
});