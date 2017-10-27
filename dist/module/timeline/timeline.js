'use strict';

/* global timelineData, jQuery */
var nowYear = void 0;

var createTimeSet = function createTimeSet(timePoint) {
  var createTimelineYear = function createTimelineYear(year) {
    var tY = year;
    return '\n      <div class="timeline__now-year">' + tY + '</div>\n    ';
  };
  var y = timePoint.date.y || '2013';
  var m = timePoint.date.m || '02';
  var d = timePoint.date.d || '';
  var content = timePoint.content || 'test';
  var nowYearText = '';
  if (!nowYear || nowYear !== y) {
    nowYear = y;
    nowYearText = createTimelineYear(nowYear);
  }
  return '\n    <div class="set">\n\n      ' + nowYearText + '\n\n      <div class="timeline__point"></div>\n\n      <div class="timeline__content">\n        <div class="timeline__date">\n          <span class="y">' + y + '</span>\n          <span class="m">' + m + '</span>\n          <span class="d">' + d + '</span>\n        </div>\n        <div class="content">' + content + '</div>\n      </div>\n\n    </div>\n  ';
};

/* eslint no-param-reassign:0 */
var timelineScrollTo = function timelineScrollTo(el, to, duration) {
  if (duration <= 0) return;
  var difference = to - el.scrollLeft;
  var perTick = difference / duration * 2;

  setTimeout(function () {
    el.scrollLeft += perTick;
    timelineScrollTo(el, to, duration - 2);
  }, 10);
};

document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.m-timeline');
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

  var timelineScroll = function timelineScroll(toPoint) {
    var tWrapMiddle = wrap.getBoundingClientRect().width / 2;
    var tWrapLeft = wrap.scrollLeft;
    var pLeft = toPoint.getBoundingClientRect().left || toPoint.getBoundingClientRect().x;
    var diff = pLeft - tWrapMiddle; // point 和中心點的距離
    var middle = diff + tWrapLeft;
    timelineScrollTo(wrap, middle, 100);
  };

  var getHeight = function getHeight(el) {
    return el.getBoundingClientRect().height;
  };

  window.addEventListener('load', function () {
    var sets = timeline.querySelectorAll('.sets .set');
    sets.forEach(function (set) {
      var point = set.querySelector('.timeline__point');
      // 按下 timepoint
      point.addEventListener('click', function (e) {
        var currentContent = e.currentTarget.parentNode.querySelector('.timeline__content');
        cancelActive(sets);
        timelineScroll(e.currentTarget);
        jQuery.Velocity(timeline, { height: getHeight(currentContent) + 150 }, { duration: 1000 });
        setTimeout(function () {
          set.classList.add('is-active');
        }, 500);
      });
    });
    // active first timepoint by default
    if (sets[0].querySelector('.timeline__point')) {
      sets[0].querySelector('.timeline__point').click();
    }
  });
});