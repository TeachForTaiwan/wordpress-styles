/* global jQuery, flexibility */
jQuery(document).ready(() => {
  // flexbox polyfill for IE
  flexibility(document.documentElement);
  const fpConfig = {
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 100,
    // paddingTop: '43px',
    // paddingBottom: '43px',
    normalScrollElements: 'footer',
    offsetSections: true,
    css3: true,
    // scrollOverflow: true,
  };

  const destoryFullpage = () => {
    if (jQuery.fn.fullpage.destroy) {
      jQuery.fn.fullpage.destroy('all');
    }
  };

  const initFullpage = () => {
    if (jQuery.fn.fullpage.destroy) {
      jQuery.fn.fullpage.destroy('all');
    }
    jQuery('#fullpage').fullpage(fpConfig);
  };

  let ww = window.innerWidth;
  const limit = 900; // screen width: 900

  // only refresh when resize between the limit width
  const refresh = () => {
    ww = window.innerWidth;
    const w = ww < limit // eslint-disable-line
      ? destoryFullpage
      : ww > limit
        ? initFullpage
        : ww = limit;
    return w;
  };

  if (window.innerWidth > 900) {
    jQuery('#fullpage').fullpage(fpConfig);
  }

  let tOut;
  window.addEventListener('resize', () => {
    const resW = window.innerWidth;
    clearTimeout(tOut);
    if ((ww > limit && resW < limit) || (ww < limit && resW > limit)) {
      tOut = setTimeout(refresh, 100);
    }
  });
});
