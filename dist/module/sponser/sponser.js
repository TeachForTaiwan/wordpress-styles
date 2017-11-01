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

  var img = function img() {
    item.filter(function (d) {
      return d.logo;
    }).append('div').classed('partner-img', true).append('a').attr('href', function (d) {
      return d.url ? d.url : 'javascript:;';
    }).attr('target', '_blank').attr('rel', 'noopener').append('img').attr('src', function (d) {
      return d.logo;
    });
  };
  img();

  var name = item.append('figcaption').classed('partner-name', true).text(function (d) {
    return d.name;
  });
});