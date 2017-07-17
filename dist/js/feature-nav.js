'use strict';

// Add a tag to SiteOrigin Features
document.addEventListener('DOMContentLoaded', function () {
  var featureList = ['#sec-salon', '#sec-gallery', '#sec-manager', '#sec-generation'];
  var featureNavs = document.querySelectorAll('.feature-nav .sow-features-feature');
  featureNavs.forEach(function (el, idx) {
    var thisEl = el;
    var newEL = '<a class="link" href="' + featureList[idx] + '">' + el.innerHTML + '</a>';
    thisEl.innerHTML = newEL;
  });
});