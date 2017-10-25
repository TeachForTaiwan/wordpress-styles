'use strict';

/* eslint-disable no-unused-vars, no-param-reassign */
var addBackgroundMask = function addBackgroundMask(_ref) {
  var _ref$elems = _ref.elems,
      elems = _ref$elems === undefined ? document.querySelectorAll('.js-bg-mask') : _ref$elems,
      _ref$maskStyle = _ref.maskStyle,
      maskStyle = _ref$maskStyle === undefined ? 'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3))' : _ref$maskStyle,
      _ref$mobileOnly = _ref.mobileOnly,
      mobileOnly = _ref$mobileOnly === undefined ? false : _ref$mobileOnly,
      _ref$desktopOnly = _ref.desktopOnly,
      desktopOnly = _ref$desktopOnly === undefined ? false : _ref$desktopOnly,
      _ref$screenRange = _ref.screenRange,
      screenRange = _ref$screenRange === undefined ? false : _ref$screenRange;

  var resetMask = function resetMask(el, originBg) {
    el.style.backgroundImage = '' + originBg;
  };
  var addMask = function addMask(el, originBg) {
    var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : maskStyle;

    var ww = window.innerWidth;
    if (mobileOnly && ww > 600) return;
    if (desktopOnly && ww < 1200) return;
    if (screenRange && (ww < screenRange[0] || ww > screenRange[1])) return;
    // get background url of the el
    if (originBg) {
      el.style.backgroundImage = maskStyle + ', ' + originBg;
    }
  };
  elems.forEach(function (el) {
    var originBg = window.getComputedStyle(el, null).getPropertyValue('background-image');
    addMask(el, originBg);
    // re render on window resize
    window.addEventListener('resize', function () {
      resetMask(el, originBg);
      addMask(el, originBg);
    });
  });
};

// usage example
// addBackgroundMask({ mobileOnly: true, screenRange: [0, 1200] });