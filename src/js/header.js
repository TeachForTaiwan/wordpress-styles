const btnSearch = document.querySelector('.btn-search');
const searchInput = document.querySelector('#input-search');
const btnMenu = document.querySelector('#btn-menu');
const headerFixed = document.querySelector('.header-fixed');
const focusElem = (el) => {
  el.focus();
};
const submitSearch = () => {
  document.getElementById('search').submit();
};
const toggleSearchBox = () => {
  btnSearch.classList.toggle('is-active');
};
const toggleMenu = () => {
  headerFixed.classList.toggle('is-active');
};


// search button
btnSearch.addEventListener('click', (e) => {
  if (e.currentTarget.classList.contains('is-active')) {
    return (searchInput.value !== '') ? submitSearch() : toggleSearchBox();
  }
  setTimeout(() => {
    focusElem(searchInput);
  }, 300);
  toggleSearchBox();
});

// 手機版 menu button
btnMenu.addEventListener('click', (e) => {
  toggleMenu();
});
