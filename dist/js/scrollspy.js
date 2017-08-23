'use strict';

/* global jQuery */
var scrollSpy = document.querySelector('.scrollspy');
var scrollSpyLink = scrollSpy.querySelectorAll('.link');
var removeActiveClass = function removeActiveClass() {
  scrollSpyLink.forEach(function (el) {
    el.parentNode.classList.remove('is-active', 'is-current');
  });
};

window.addEventListener('load', function () {
  var spyKey = document.querySelector('.scrollspy-container').dataset.key;
  var spySections = document.querySelectorAll('.' + spyKey);
  var spySection = {};
  var spyElementOffsetBottom = document.body.scrollHeight - 1000;
  spySections.forEach(function (e) {
    spySection[e.id] = e.offsetTop;
  });
  var spyElementOffsetTop = spySection[spyKey + '-1']; // first-section of scrollspy

  window.addEventListener('scroll', function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
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
});

document.addEventListener('DOMContentLoaded', function () {
  scrollSpyLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
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