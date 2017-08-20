/* global jQuery */
const scrollSpy = document.querySelector('.scrollspy');
const scrollSpyLink = scrollSpy.querySelectorAll('.link');
// const scrollTo = (element, to, duration) => {
//   if (duration <= 0) return;
//   const difference = to - element.scrollTop;
//   const perTick = (difference / duration) * 2;

//   setTimeout(() => {
//     element.scrollTop += perTick;
//     if (element.scrollTop === to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// };
const removeActiveClass = () => {
  scrollSpyLink.forEach((el) => {
    el.parentNode.classList.remove('is-active', 'is-current');
  });
};

window.addEventListener('load', () => {
  const spyKey = document.querySelector('.scrollspy-container').dataset.key;
  const spySections = document.querySelectorAll(`.${spyKey}`);
  const spySection = {};
  const spyElementOffsetBottom = document.body.scrollHeight - 1000;
  let i = 0;
  spySections.forEach((e) => {
    spySection[e.id] = e.offsetTop;
  });
  const spyElementOffsetTop = spySection[`${spyKey}-1`]; // first-section of scrollspy

  window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > spyElementOffsetTop && scrollPosition < spyElementOffsetBottom) {
      document.querySelector('.scrollspy').classList.add('is-show');
    } else {
      document.querySelector('.scrollspy').classList.remove('is-show');
    }

    jQuery.each(spySection, (k, value) => {
      if (value <= scrollPosition + 150) {
        removeActiveClass();
        document.querySelector(`.scrollspy .link[href*="${k}"]`).parentNode.classList.add('is-active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  scrollSpyLink.forEach((link) => {
    link.addEventListener('click', (e) => {
      const elemHref = e.currentTarget.getAttribute('href');
      const elem = document.querySelector(elemHref);
      const curIndex = Array.from(elem.parentNode.children).indexOf(elem);

      // scroll anim
      e.preventDefault();
      jQuery('html,body').animate({ scrollTop: jQuery(elemHref).offset().top - 60 }, 800);
      removeActiveClass();
      scrollSpyLink[curIndex].parentNode.classList.add('is-active');
      elem.classList.add('is-current');
    });
  });
});
