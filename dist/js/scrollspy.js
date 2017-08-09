'use strict';

var scrollSpy = document.querySelector('.scrollspy');
var scrollSpyLink = scrollSpy.querySelectorAll('.link');
var removeActiveClass = function removeActiveClass() {
  scrollSpyLink.forEach(function (el) {
    el.parentNode.classList.remove('is-active', 'is-current');
  });
};

window.addEventListener('load', function () {
  var spySections = document.querySelectorAll('.program');
  var spySection = {};
  var spyElementOffsetTop = 600;
  var spyElementOffsetBottom = document.body.scrollHeight - 1000;
  var i = 0;

  console.log(spySections);
  spySections.forEach(function (e) {
    spySection[e.id] = e.offsetTop;
  });
  console.log(spySection);

  window.addEventListener('scroll', function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
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
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'is-active');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {

  scrollSpyLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var elem = e.currentTarget.parentNode;
      var curIndex = Array.from(elem.parentNode.children).indexOf(elem);

      removeActiveClass();
      for (var j = 0; j < curIndex + 1; j++) {
        scrollSpyLink[j].parentNode.classList.add('is-active');
      }
      elem.classList.add('is-current');
    });
  });
});