// 我們怎麼做 TAB functions
/* global Stickyfill, jQuery */

// const getPosition = (element) => {
//   let xPosition = 0;
//   let yPosition = 0;

//   while (element) {
//     xPosition += ((element.offsetLeft - element.scrollLeft) + element.clientLeft) || 0;
//     yPosition += ((element.offsetTop - element.scrollTop) + element.clientTop) || 0;
//     element = element.offsetParent;
//   }

//   return { x: xPosition, y: yPosition };
// };

document.addEventListener('DOMContentLoaded', () => {
  const tabControl = document.querySelector('.tab-control');
  const tabButtons = tabControl.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const stickyChilds = document.querySelectorAll('.sticky-child');
  const docEl = document.documentElement || document.body;
  // let tabControlOffsetTop = (tabControl.getBoundingClientRect().top + window.scrollY) - 80;
  const removeActive = (el) => {
    el.classList.remove('is-active');
  };
  const switchTab = (e) => {
    const targetContent = document.querySelector(`.${e.currentTarget.dataset.for}`);
    tabContents.forEach(removeActive);
    targetContent.classList.add('is-active');
  };

  // window.addEventListener('load', () => {
  // tabControlOffsetTop = getPosition(tabControl).y + 125 || 0;
  // tabControlOffsetTop = (tabControl.getBoundingClientRect().top + window.scrollY) - 120;
  // });
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

      switchTab(e);
      tabButtons.forEach(removeActive);
      activeBtn.classList.add('is-active');
      jQuery.Velocity(docEl, 'scroll', { offset: 650 }, 1000);
    });
  });
});
