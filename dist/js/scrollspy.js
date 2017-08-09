'use strict';

var scrollSpy = document.querySelector('.scrollspy');
var scrollSpyLink = scrollSpy.querySelectorAll('.link');
var removeActiveClass = function removeActiveClass() {
  scrollSpyLink.forEach(function (el) {
    el.parentNode.classList.remove('is-active', 'is-current');
  });
};
var spySections = document.querySelectorAll('.program');
var spySection = {};
var i = 0;

document.addEventListener('DOMContentLoaded', function () {
  scrollSpyLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var elem = e.currentTarget.parentNode;
      var curIndex = Array.from(elem.parentNode.children).indexOf(elem);

      removeActiveClass();
      for (var _i = 0; _i < curIndex + 1; _i++) {
        scrollSpyLink[_i].parentNode.classList.add('is-active');
      }
      elem.classList.add('is-current');
    });
  });

  [].forEach.call(spySections, function (e) {
    spySection[e.id] = e.offsetTop;
  });
});

window.addEventListener('scroll', function () {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  for (i in spySection) {
    if (spySection[i] <= scrollPosition) {
      removeActiveClass();
      document.querySelector('a[href*=' + i + ']').setAttribute('class', 'is-active');
    }
  }
});