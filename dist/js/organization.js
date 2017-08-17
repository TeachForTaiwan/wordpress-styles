'use strict';

var closeTabs = function closeTabs() {
  var tabs = document.querySelectorAll('.org-container .org-content');
  [].forEach.call(tabs, function (tab) {
    tab.classList.remove('is-active');
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var org = document.querySelector('.org-container');
  var orgTabs = org.querySelectorAll('.item');
  [].forEach.call(orgTabs, function (tab) {
    tab.addEventListener('click', function (e) {
      var targetId = e.currentTarget.dataset.id;
      var targetEl = document.getElementById(targetId);
      closeTabs();
      targetEl.classList.add('is-active');
      console.log(targetEl);
    });
  });
});