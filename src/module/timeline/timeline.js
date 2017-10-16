/* global timelineData */
const createTimeSet = (
  timePoint,
) => {
  const y = timePoint.date.y || '2013';
  const m = timePoint.date.m || '02';
  const d = timePoint.date.d || '';
  const content = timePoint.content || 'test';
  return `
    <div class="set">

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

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.m-timeline');
  // const line = timeline.querySelector('.timeline__line');
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

  const autoScroll = (toPoint) => {
    const pointRect = toPoint.getBoundingClientRect();
    const setRect = toPoint.parentNode.getBoundingClientRect();
    const toPointLeft = pointRect.left + (setRect.width / 2);
    const middle = toPointLeft - (timeline.offsetWidth / 2);
    wrap.scrollTo(middle, 0);
    scrollTo(wrap, middle, 500);
  };

  window.addEventListener('load', () => {
    const sets = timeline.querySelectorAll('.sets .set');
    sets.forEach((set) => {
      const point = set.querySelector('.timeline__point');
      // 按下 timepoint
      point.addEventListener('click', (e) => {
        cancelActive(sets);
        cancelActive(sets);
        autoScroll(e.currentTarget);
        setTimeout(() => {
          set.classList.add('is-active');
        }, 500);
      });
    });
  });
});
