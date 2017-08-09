const scrollSpy = document.querySelector('.scrollspy');
const scrollSpyLink = scrollSpy.querySelectorAll('.link');
const removeActiveClass = () => {
  scrollSpyLink.forEach((el) => {
    el.parentNode.classList.remove('is-active', 'is-current');
  });
};
const spySections = document.querySelectorAll('.program');
const spySection = {};
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  scrollSpyLink.forEach((link) => {
    link.addEventListener('click', (e) => {
      const elem = e.currentTarget.parentNode;
      const curIndex = Array.from(elem.parentNode.children).indexOf(elem);

      removeActiveClass();
      for (let i = 0; i < curIndex + 1; i++) {
        scrollSpyLink[i].parentNode.classList.add('is-active');
      }
      elem.classList.add('is-current');
    });
  });


  [].forEach.call(spySections, (e) => {
    spySection[e.id] = e.offsetTop;
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  for (i in spySection) {
    if (spySection[i] <= scrollPosition) {
      removeActiveClass();
      document.querySelector(`a[href*=${i}]`).setAttribute('class', 'is-active');
    }
  }
});
