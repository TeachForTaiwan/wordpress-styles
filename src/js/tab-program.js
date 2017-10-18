// 我們怎麼做 TAB functions
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
  const tabButtons = document.querySelectorAll('.tab-control .tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const stickyChild = document.querySelector('.sticky-child');
  const docEl = document.documentElement || document.body;
  // let tabControlOffsetTop = (tabControl.getBoundingClientRect().top + window.scrollY) - 80;
  const hideAll = () => {
    tabContents.forEach((content) => {
      content.classList.remove('is-active');
    });
  };
  const switchButtonActive = () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove('is-active');
    });
  };
  const switchTab = (e) => {
    const targetContentClass = e.currentTarget.dataset.for;
    const targetContent = document.querySelector(`.${targetContentClass}`);
    hideAll();
    targetContent.classList.add('is-active');
  };
  const addStickyEl = (childEl) => {
    childEl.parentNode.classList.add('sticky');
  };

  window.addEventListener('load', () => {
    // tabControlOffsetTop = getPosition(tabControl).y + 125 || 0;
    // tabControlOffsetTop = (tabControl.getBoundingClientRect().top + window.scrollY) - 120;
  });
  /* global Stickyfill, jQuery */
  addStickyEl(stickyChild);
  const stickyElems = document.querySelectorAll('.sticky');
  Stickyfill.add(stickyElems);

  // change tabControl(sticky) bg style
  tabControl.parentNode.parentNode.style.backgroundColor = 'rgba(255,255,255,.85)';

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const currentFor = e.currentTarget.dataset.for;
      const activeBtn = document.querySelector(`.tab-button[data-for=${currentFor}]`);

      switchTab(e);
      switchButtonActive();
      activeBtn.classList.add('is-active');
      jQuery.Velocity(docEl, 'scroll', { offset: 800 }, 1000);
    });
  });
});
