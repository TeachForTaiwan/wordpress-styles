/* global timelineData, jQuery */
let nowYear;

const createTimeSet = (timePoint) => {
  const createTimelineYear = (year) => {
    const tY = year;
    return `
      <div class="timeline__now-year">${tY}</div>
    `;
  };
  const y = timePoint.date.y || '2013';
  const m = timePoint.date.m || '02';
  const d = timePoint.date.d || '';
  const content = timePoint.content || 'test';
  let nowYearText = '';
  if (!nowYear || nowYear !== y) {
    nowYear = y;
    nowYearText = createTimelineYear(nowYear);
  }
  return `
    <div class="set">

      ${nowYearText}

      <div class="timeline__point"></div>

      <div class="timeline__content">
        <div class="timeline__date">
          <span class="y">${y}</span>
          <span class="m">${m}</span>
          <span class="d">${d}</span>
        </div>
        <div class="content">${content}</div>
      </div>

    </div>
  `;
};

/* eslint no-param-reassign:0 */
const timelineScrollTo = (el, to, duration) => {
  if (duration <= 0) return;
  const difference = to - el.scrollLeft;
  const perTick = (difference / duration) * 2;

  setTimeout(() => {
    el.scrollLeft += perTick;
    timelineScrollTo(el, to, duration - 2);
  }, 10);
};

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.m-timeline');
  const wrap = timeline.querySelector('.timeline__wrap');
  const setContainer = timeline.querySelector('.sets');
  timelineData.forEach((point) => {
    setContainer.innerHTML += createTimeSet(point);
  });

  const cancelActive = (listEl) => {
    listEl.forEach((item) => {
      item.classList.remove('is-active');
    });
  };

  const timelineScroll = (toPoint) => {
    const tWrapMiddle = wrap.getBoundingClientRect().width / 2;
    const tWrapLeft = wrap.scrollLeft;
    const pLeft = toPoint.getBoundingClientRect().left || toPoint.getBoundingClientRect().x;
    const diff = pLeft - tWrapMiddle; // point 和中心點的距離
    const middle = diff + tWrapLeft;
    timelineScrollTo(wrap, middle, 100);
  };

  const getHeight = el => el.getBoundingClientRect().height;

  window.addEventListener('load', () => {
    const sets = timeline.querySelectorAll('.sets .set');
    sets.forEach((set) => {
      const point = set.querySelector('.timeline__point');
      // 按下 timepoint
      point.addEventListener('click', (e) => {
        const currentContent = e.currentTarget.parentNode.querySelector('.timeline__content');
        cancelActive(sets);
        timelineScroll(e.currentTarget);
        jQuery.Velocity(timeline, { height: getHeight(currentContent) + 150 }, { duration: 1000 });
        setTimeout(() => {
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
