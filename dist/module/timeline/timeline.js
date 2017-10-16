'use strict';

/* global timelineData */
var createTimeSet = function createTimeSet(timePoint) {
  var y = timePoint.date.y || '2013';
  var m = timePoint.date.m || '02';
  var d = timePoint.date.d || '';
  var content = timePoint.content || 'test';
  return '\n    <div class="set">\n\n      <div class="timeline__point"></div>\n\n      <div class="timeline__content">\n        <div class="timeline__date">\n          <span class="y">' + y + '</span>\n          <span class="m">' + m + '</span>\n          <span class="d">' + d + '</span>\n        </div>\n        <div class="content">' + content + '</div>\n      </div>\n\n    </div>\n  ';
};

document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.m-timeline');
  // const line = timeline.querySelector('.timeline__line');
  var wrap = timeline.querySelector('.timeline__wrap');
  var setContainer = timeline.querySelector('.sets');
  timelineData.forEach(function (point) {
    setContainer.innerHTML += createTimeSet(point);
  });

  var cancelActive = function cancelActive(listEl) {
    listEl.forEach(function (item) {
      item.classList.remove('is-active');
    });
  };

  var autoScroll = function autoScroll(toPoint) {
    var pointRect = toPoint.getBoundingClientRect();
    var setRect = toPoint.parentNode.getBoundingClientRect();
    var toPointLeft = pointRect.left + setRect.width / 2;
    var middle = toPointLeft - timeline.offsetWidth / 2;
    wrap.scrollTo(middle, 0);
    scrollTo(wrap, middle, 500);
  };

  window.addEventListener('load', function () {
    var sets = timeline.querySelectorAll('.sets .set');
    sets.forEach(function (set) {
      var point = set.querySelector('.timeline__point');
      // 按下 timepoint
      point.addEventListener('click', function (e) {
        cancelActive(sets);
        cancelActive(sets);
        autoScroll(e.currentTarget);
        setTimeout(function () {
          set.classList.add('is-active');
        }, 500);
      });
    });
  });
});