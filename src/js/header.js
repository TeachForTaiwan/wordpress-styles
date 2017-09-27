const btnSearch = document.querySelector('.btn-search');
const searchInput = document.querySelector('#input-search');
const btnMenu = document.querySelector('#btn-menu');
const header = document.querySelector('#header');
const headerNav = document.querySelector('#nav-menu');
const menuPrimary = document.querySelector('#menu-primary');
const menuMask = document.querySelector('#menu-mask');
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
  headerNav.classList.toggle('is-active');
};
const fixMenuPrimary = () => {
  menuPrimary.classList.add('is-fixed');
  headerNav.classList.add('is-fixed');
  document.body.classList.add('has-fixed-top');
};
const unfixMenuPrimary = () => {
  menuPrimary.classList.remove('is-fixed');
  headerNav.classList.remove('is-fixed');
  document.body.classList.remove('has-fixed-top');
};
const toggleMask = () => {
  menuMask.classList.toggle('is-active');
};
const fixHeader = () => {
  header.classList.add('is-fixed');
  document.body.classList.add('has-fixed-top');
};
const unfixHeader = () => {
  header.classList.remove('is-fixed');
  document.body.classList.remove('has-fixed-top');
};
const removeLink = (className) => {
  document.querySelectorAll(className).forEach((el) => {
    el.removeAttribute('href');
  });
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
  return true;
});

// 手機版 menu button
btnMenu.addEventListener('click', () => {
  toggleMenu();
  toggleMask();
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (window.innerWidth >= 900) {
    if (scrollTop > 100) {
      fixMenuPrimary();
    } else {
      unfixMenuPrimary();
    }
    return;
  }
  if (scrollTop > 100) {
    fixHeader();
  } else {
    unfixHeader();
  }
});

window.addEventListener('resize', () => {
  window.innerWidth < 900 ? unfixMenuPrimary() : unfixHeader();
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 900) {
    removeLink('.has-sub');
  }
});
