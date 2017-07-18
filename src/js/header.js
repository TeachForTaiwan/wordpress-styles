const header = document.querySelector('.header');
const btnMenu = document.querySelector('#m-btn-menu');
const navItemList = header.querySelectorAll('.item');
const toggleNavbar = (func) => {
  if (func === 'hide') {
    header.classList.remove('is-active');
  }
  if (func === 'show') {
    header.classList.add('is-active');
  }
};

btnMenu.addEventListener('click', () => {
  header.classList.toggle('is-open');
});

[].forEach.call(navItemList, (item) => {
  item.addEventListener('click', (e) => {
    const curLink = e.currentTarget.querySelector('.link');
    if (curLink.href !== 'javascript:;') {
      header.classList.remove('is-open');
    }
  });
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop <= 100) {
    toggleNavbar('hide');
  } else {
    toggleNavbar('show');
  }
});
