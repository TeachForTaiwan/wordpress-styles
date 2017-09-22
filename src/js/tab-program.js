// 我們怎麼做 TAB funcstions
document.addEventListener('DOMContentLoaded', () => {
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

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      switchTab(e);
      switchButtonActive();
      btn.classList.add('is-active');
    });
  });
});
