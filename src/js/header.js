const btnSearch = document.querySelector('.btn-search');
const searchInput = document.querySelector('#input-search');
const submitSearch = () => {
  document.getElementById('search').submit();
};
const toggleSearchBox = () => {
  btnSearch.classList.toggle('is-active');
};
btnSearch.addEventListener('click', (e) => {
  if (e.currentTarget.classList.contains('is-active')) {
    return (searchInput.value !== '') ? submitSearch() : toggleSearchBox();
  }
  toggleSearchBox();
});
