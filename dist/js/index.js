'use strict';

/* global jQuery, flexibility */
jQuery(document).ready(function () {
  // flexbox polyfill for IE
  flexibility(document.documentElement);
  var fpConfig = {
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 100,
    // paddingTop: '43px',
    // paddingBottom: '43px',
    normalScrollElements: 'footer',
    offsetSections: true,
    css3: true
    // scrollOverflow: true,
  };

  var destoryFullpage = function destoryFullpage() {
    if (jQuery.fn.fullpage.destroy) {
      jQuery.fn.fullpage.destroy('all');
    }
  };

  var initFullpage = function initFullpage() {
    if (jQuery.fn.fullpage.destroy) {
      jQuery.fn.fullpage.destroy('all');
    }
    jQuery('#fullpage').fullpage(fpConfig);
  };

  var ww = window.innerWidth;
  var limit = 900; // screen width: 900

  // only refresh when resize between the limit width
  var refresh = function refresh() {
    ww = window.innerWidth;
    var w = ww < limit // eslint-disable-line
    ? destoryFullpage : ww > limit ? initFullpage : ww = limit;
    return w;
  };

  if (window.innerWidth > 900) {
    jQuery('#fullpage').fullpage(fpConfig);
  }

  var tOut = void 0;
  window.addEventListener('resize', function () {
    var resW = window.innerWidth;
    clearTimeout(tOut);
    if (ww > limit && resW < limit || ww < limit && resW > limit) {
      tOut = setTimeout(refresh, 100);
    }
  });
});