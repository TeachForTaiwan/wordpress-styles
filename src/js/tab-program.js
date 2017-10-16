// 我們怎麼做 TAB functions
const getPosition = (element) => {
  let xPosition = 0;
  let yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
};

document.addEventListener('DOMContentLoaded', () => {
  const tabControlAside = document.querySelector('.tab-control--aside');
  let tabControlOffsetTop = getPosition(document.querySelector('.tab-control')).y || 0;
  const tabButtons = document.querySelectorAll('.tab-control .tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
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

  window.addEventListener('load', () => {
    tabControlOffsetTop = getPosition(document.querySelector('.tab-control')).y || 0;
  });

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const currentFor = e.currentTarget.dataset.for;
      const activeBtns = document.querySelectorAll(`.tab-button[data-for=${currentFor}]`);
      switchTab(e);
      switchButtonActive();
      activeBtns.forEach((el) => {
        el.classList.add('is-active');
      });
      document.documentElement.scrollTop = tabControlOffsetTop;
    });
  });

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > tabControlOffsetTop) {
      tabControlAside.classList.add('is-active');
    } else {
      tabControlAside.classList.remove('is-active');
    }
  });
});
