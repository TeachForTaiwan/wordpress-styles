'use strict';

/* global jQuery */
document.addEventListener('DOMContentLoaded', function () {
  // query elems
  var scrollSpy = document.querySelector('.scrollspy');
  var scrollSpyLink = scrollSpy.querySelectorAll('.link');
  var spyKey = document.querySelector('.scrollspy-container').dataset.key;
  var spySections = document.querySelectorAll('.' + spyKey);
  var spySection = {};
  var spyElementOffsetTop = void 0; // first-section of scrollspy
  var spyElementOffsetBottom = void 0; // last-section of scrollspy

  // fns
  var removeActiveClass = function removeActiveClass() {
    scrollSpyLink.forEach(function (el) {
      el.parentNode.classList.remove('is-active', 'is-current');
    });
  };
  var updateSectionOffset = function updateSectionOffset() {
    spySections.forEach(function (sec) {
      spySection[sec.id] = sec.offsetTop;
    });
    spyElementOffsetTop = spySection[spyKey + '-1'];
    spyElementOffsetBottom = document.body.scrollHeight - 1000;
  };

  // event listener
  window.addEventListener('load', function () {
    updateSectionOffset();

    window.addEventListener('scroll', function () {
      updateSectionOffset();
      var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollPosition > spyElementOffsetTop && scrollPosition < spyElementOffsetBottom) {
        document.querySelector('.scrollspy').classList.add('is-show');
      } else {
        document.querySelector('.scrollspy').classList.remove('is-show');
      }

      jQuery.each(spySection, function (k, value) {
        if (value <= scrollPosition + 150) {
          removeActiveClass();
          document.querySelector('.scrollspy .link[href*="' + k + '"]').parentNode.classList.add('is-active');
        }
      });
    });
    window.addEventListener('resize', updateSectionOffset);
  });

  scrollSpyLink.forEach(function (link) {
    return link.addEventListener('click', function (e) {
      var elemHref = e.currentTarget.getAttribute('href');
      var elem = document.querySelector(elemHref);
      var curIndex = Array.from(elem.parentNode.children).indexOf(elem);

      // scroll anim
      e.preventDefault();
      jQuery('html,body').animate({ scrollTop: jQuery(elemHref).offset().top - 60 }, 800);
      removeActiveClass();
      scrollSpyLink[curIndex].parentNode.classList.add('is-active');
      elem.classList.add('is-current');
    });
  });
});