'use strict';

var btnSearch = document.querySelector('.btn-search');
var searchInput = document.querySelector('#input-search');
var submitSearch = function submitSearch() {
  document.getElementById('search').submit();
};
var toggleSearchBox = function toggleSearchBox() {
  btnSearch.classList.toggle('is-active');
};
btnSearch.addEventListener('click', function (e) {
  if (e.currentTarget.classList.contains('is-active')) {
    return searchInput.value !== '' ? submitSearch() : toggleSearchBox();
  }
  toggleSearchBox();
});