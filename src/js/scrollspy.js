const scrollSpy = document.querySelector('.scrollspy');
const scrollSpyLink = scrollSpy.querySelectorAll('.link');
const removeActiveClass = () => {
  scrollSpyLink.forEach((el) => {
    el.parentNode.classList.remove('is-active', 'is-current');
  });
};

window.addEventListener('load', () => {
  const spySections = document.querySelectorAll('.program');
  const spySection = {};
  const spyElementOffsetTop = 600;
  const spyElementOffsetBottom = document.body.scrollHeight - 1000;
  let i = 0;

  console.log(spySections);
  spySections.forEach((e) => {
    spySection[e.id] = e.offsetTop;
  });
  console.log(spySection);

  window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > spyElementOffsetTop && scrollPosition < spyElementOffsetBottom) {
      console.log(scrollPosition, spyElementOffsetTop, spyElementOffsetBottom);
      document.querySelector('.scrollspy').classList.add('is-show');
    } else {
      console.log(scrollPosition, spyElementOffsetTop, spyElementOffsetBottom);
      document.querySelector('.scrollspy').classList.remove('is-show');
    }

    // buggy for scrollSpy
    // id(program-1~4)的位置有誤
    for (i in spySection) {
      if (spySection[i] <= scrollPosition) {
        removeActiveClass();
        document.querySelector(`a[href*=${i}]`).setAttribute('class', 'is-active');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  scrollSpyLink.forEach((link) => {
    link.addEventListener('click', (e) => {
      const elem = e.currentTarget.parentNode;
      const curIndex = Array.from(elem.parentNode.children).indexOf(elem);

      removeActiveClass();
      for (let j = 0; j < curIndex + 1; j++) {
        scrollSpyLink[j].parentNode.classList.add('is-active');
      }
      elem.classList.add('is-current');
    });
  });

});
