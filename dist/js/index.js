'use strict';

/* global jQuery */
jQuery(document).ready(function () {
  var fpConfig = {
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 100,
    paddingTop: '43px',
    // paddingBottom: '43px',
    normalScrollElements: 'footer',
    offsetSections: true,
    css3: true
    // scrollOverflow: true,
  };

  if (window.innerWidth > 900) {
    jQuery('#fullpage').fullpage(fpConfig);
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth <= 900) {
      if (jQuery.fn.fullpage.destroy) {
        jQuery.fn.fullpage.destroy('all');
      }
    } else {
      if (jQuery.fn.fullpage.destroy) {
        jQuery.fn.fullpage.destroy('all');
      }
      jQuery('#fullpage').fullpage(fpConfig);
    }
  });
});