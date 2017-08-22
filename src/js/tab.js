const clickTabWithHash = (hash) => {
  const activeTab = document.querySelector(`label[data-hash="${hash}"]`);
  if (!activeTab) return;
  activeTab.click();
};
const hasTab = tabEl => (!!tabEl);
const hasHash = hashString => (!!hashString);
const hashString = window.location.hash;
const tabWrap = document.querySelector('.tab-wrap');
const tabs = tabWrap.querySelectorAll('label[data-hash]');

const handleTabClick = () => {
  if (!tabs) return;
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const currentHash = e.currentTarget.dataset.hash;
      if (!currentHash) return;
      window.history.pushState('', null, currentHash);
    });
  });
};

handleTabClick();
if (hasTab(tabWrap) && hasHash(hashString)) {
  clickTabWithHash(hashString);
}
