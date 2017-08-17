const rmClass = (el, cName) => {
  el.classList.remove(cName);
};

const closeTabs = () => {
  const tabs = document.querySelectorAll('.org-container .org-content');
  const orgItems = document.querySelectorAll('.org-container .item');
  [].forEach.call(tabs, (tab) => {
    rmClass(tab, 'is-active');
  });
  [].forEach.call(orgItems, (item) => {
    rmClass(item, 'is-active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const org = document.querySelector('.org-container');
  const orgTabs = org.querySelectorAll('.item');
  [].forEach.call(orgTabs, (tab) => {
    tab.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('is-active')) {
        closeTabs();
        return;
      }
      const targetId = e.currentTarget.dataset.id;
      const targetEl = document.getElementById(targetId);
      closeTabs();
      e.currentTarget.classList.add('is-active');
      targetEl.classList.add('is-active');
    });
  });
});
