const closeTabs = () => {
  const tabs = document.querySelectorAll('.org-container .org-content');
  [].forEach.call(tabs, (tab) => {
    tab.classList.remove('is-active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const org = document.querySelector('.org-container');
  const orgTabs = org.querySelectorAll('.item');
  [].forEach.call(orgTabs, (tab) => {
    tab.addEventListener('click', (e) => {
      const targetId = e.currentTarget.dataset.id;
      const targetEl = document.getElementById(targetId);
      closeTabs();
      targetEl.classList.add('is-active');
      console.log(targetEl);
    });
  });
});
