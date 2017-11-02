'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var type = d3.select('.sponser').selectAll('div').data(dataSponser).enter().append('div').classed('content-placeholder', true);

  var content = type.append('div').classed('article-content', true);

  var contentType = content.append('h2').append('span').classed('red1', true).text(function (d) {
    return d.type;
  });

  var list = content.append('div').classed('partner-listing', true);

  var item = list.selectAll('figure').data(function (d) {
    return d.list;
  }).enter().append('figure');

  var img = item.filter(function (d) {
    return d.logo;
  }).append('div').classed('partner-img', true).append('a').attr('href', function (d) {
    return d.url ? d.url : 'javascript:;';
  }).attr('target', '_blank').attr('rel', 'noopener').append('img').attr('src', function (d) {
    return d.logo;
  }).attr('alt', function (d) {
    return d.name;
  });

  var name = item.append('figcaption').classed('partner-name', true).text(function (d) {
    return d.name;
  });

  var intro = item.filter(function (d) {
    return d.intro;
  }).append('div').classed('intro', true).selectAll('p').data(function (d) {
    return d.intro;
  }).enter().append('p').text(function (d) {
    return d;
  });

  // intro event
  var sponsers = document.querySelectorAll('.partner-listing figure');
  var introContent = document.querySelector('.intro-content');
  var hasIntro = function hasIntro(el) {
    return !!el.querySelector('.intro');
  };
  var showIntro = function showIntro(el) {
    if (!hasIntro(el)) return false;
    el.classList.add('intro-show');
  };
  var fadeIntro = function fadeIntro(el) {
    if (!hasIntro(el)) return false;
    el.classList.remove('intro-show');
  };
  [].forEach.call(sponsers, function (item) {
    item.addEventListener('mouseenter', function (e) {
      var target = e.currentTarget;
      showIntro(target);
    });
    item.addEventListener('mouseleave', function (e) {
      var target = e.currentTarget;
      fadeIntro(target);
    });
  });
});