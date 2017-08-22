'use strict';

var clickTabWithHash = function clickTabWithHash(hash) {
  var activeTab = document.querySelector('label[data-hash="' + hash + '"]');
  if (!activeTab) return;
  activeTab.click();
};
var hasTab = function hasTab(tabEl) {
  return !!tabEl;
};
var hasHash = function hasHash(hashString) {
  return !!hashString;
};
var hashString = window.location.hash;
var tabWrap = document.querySelector('.tab-wrap');
var tabs = tabWrap.querySelectorAll('label[data-hash]');

var handleTabClick = function handleTabClick() {
  if (!tabs) return;
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      var currentHash = e.currentTarget.dataset.hash;
      if (!currentHash) return;
      window.history.pushState('', null, currentHash);
    });
  });
};

handleTabClick();
if (hasTab(tabWrap) && hasHash(hashString)) {
  clickTabWithHash(hashString);
}