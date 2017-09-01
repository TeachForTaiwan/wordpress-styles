/* global jQuery */
document.addEventListener('DOMContentLoaded', () => {
  // query elems
  const scrollSpy = document.querySelector('.scrollspy');
  const scrollSpyLink = scrollSpy.querySelectorAll('.link');
  const spyKey = document.querySelector('.scrollspy-container').dataset.key;
  const spySections = document.querySelectorAll(`.${spyKey}`);
  const spySection = {};
  let spyElementOffsetTop; // first-section of scrollspy
  let spyElementOffsetBottom; // last-section of scrollspy

  // fns
  const removeActiveClass = () => {
    scrollSpyLink.forEach((el) => {
      el.parentNode.classList.remove('is-active', 'is-current');
    });
  };
  const updateSectionOffset = () => {
    spySections.forEach((sec) => {
      spySection[sec.id] = sec.offsetTop;
    });
    spyElementOffsetTop = spySection[`${spyKey}-1`];
    spyElementOffsetBottom = document.body.scrollHeight - 1000;
  };

  // event listener
  window.addEventListener('load', () => {
    updateSectionOffset();

    window.addEventListener('scroll', () => {
      updateSectionOffset();
      const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
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
    window.addEventListener('resize', updateSectionOffset);
  });

  scrollSpyLink.forEach(link => link.addEventListener('click', (e) => {
    const elemHref = e.currentTarget.getAttribute('href');
    const elem = document.querySelector(elemHref);
    const curIndex = Array.from(elem.parentNode.children).indexOf(elem);

    // scroll anim
    e.preventDefault();
    jQuery('html,body').animate({ scrollTop: jQuery(elemHref).offset().top - 60 }, 800);
    removeActiveClass();
    scrollSpyLink[curIndex].parentNode.classList.add('is-active');
    elem.classList.add('is-current');
  }));
});
