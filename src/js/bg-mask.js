/* eslint-disable no-unused-vars, no-param-reassign */
const addBackgroundMask = (
  {
    elems = document.querySelectorAll('.js-bg-mask'),
    maskStyle = 'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3))',
    mobileOnly = false,
    desktopOnly = false,
    screenRange = false, // [0, Infinity]
  }) => {
  const resetMask = (el, originBg) => {
    el.style.backgroundImage = `${originBg}`;
  };
  const addMask = (
    el,
    originBg,
    mask = maskStyle,
  ) => {
    const ww = window.innerWidth;
    if (mobileOnly && ww > 600) return;
    if (desktopOnly && ww < 1200) return;
    if (screenRange && (ww < screenRange[0] || ww > screenRange[1])) return;
    // get background url of the el
    if (originBg) {
      el.style.backgroundImage = `${maskStyle}, ${originBg}`;
    }
  };
  elems.forEach((el) => {
    const originBg = window.getComputedStyle(el, null).getPropertyValue('background-image');
    addMask(el, originBg);
    // re render on window resize
    window.addEventListener('resize', () => {
      resetMask(el, originBg);
      addMask(el, originBg);
    });
  });
};

// usage example
// addBackgroundMask({ mobileOnly: true, screenRange: [0, 1200] });
