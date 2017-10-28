// 我們怎麼做 TAB functions
/* global Stickyfill, jQuery */
document.addEventListener('DOMContentLoaded', () => {
  const tabControl = document.querySelector('.tab-control');
  const tabButtons = tabControl.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const stickyChilds = document.querySelectorAll('.sticky-child');
  const docEl = document.documentElement || document.body;
  const removeActive = (el) => {
    el.classList.remove('is-active');
  };
  const switchTab = (e) => {
    const targetContent = document.querySelector(`.${e.currentTarget.dataset.for}`);
    tabContents.forEach(removeActive);
    targetContent.classList.add('is-active');
  };

  stickyChilds.forEach((child) => {
    child.parentNode.classList.add('sticky');
  });
  const stickyElems = document.querySelectorAll('.sticky');
  Stickyfill.add(stickyElems);

  // hard code to change tabControl(sticky)'s bgColor
  tabControl.parentNode.parentNode.style.backgroundColor = 'rgba(255,255,255,.85)';

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const currentFor = e.currentTarget.dataset.for;
      const activeBtn = document.querySelector(`.tab-button[data-for=${currentFor}]`);
      const headerH = document.querySelector('header').offsetHeight;
      const controlBarH = tabControl.offsetHeight;

      switchTab(e);
      tabButtons.forEach(removeActive);
      activeBtn.classList.add('is-active');
      const contentOffset = document.querySelector('.tab-content.is-active').offsetTop;

      jQuery.Velocity(docEl, 'scroll', {
        duration: 700,
        offset: contentOffset - headerH - controlBarH - 20,
        easing: 'ease-in-out',
      });
    });
  });
});
