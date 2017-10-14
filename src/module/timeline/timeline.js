/* global timelineData */
const createTimeSet = (
  timePoint,
) => {
  const year = timePoint.year || '2013';
  const month = timePoint.month || '02';
  const day = timePoint.day || '';
  const content = timePoint.content || 'test';
  return `
    <div class="set">

      <div class="timeline__point"></div>

      <div class="timeline__content">
        <div class="timeline__date">
          <span class="year">${year}</span>
          <span class="month">${month}</span>
          <span class="dat">${day}</span>
        </div>
        <div class="content">${content}</div>
      </div>

    </div>
  `};

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.m-timeline');
  // const line = timeline.querySelector('.timeline__line');
  const wrap = timeline.querySelector('.timeline__wrap');
  const setContainer = timeline.querySelector('.sets');
  timelineData.forEach((point) => {
    console.log(point);
    setContainer.innerHTML += createTimeSet(point);
  });

  // console.log(timelineData);
  // timelineData.forEach((point) => {
  //   console.log(point);
  // });

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
