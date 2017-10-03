'use strict';

var coreTeamWrapper = document.querySelector('#core-team');
var boardWrapper = document.querySelector('#board');

var obj2HTML = function obj2HTML(obj, type) {
  var output = '';
  obj.forEach(function (item, idx) {
    var para = '';
    item.content.para.forEach(function (p) {
      para += '<p class="p">' + p + '</p>';
    });
    output += '\n      <div class="swiper-slide">\n        <a href="#l-' + type + '-' + (idx + 1) + '" data-lity="data-lity">\n          <figure class="item-set">\n            <figcaption class="title-container">\n              <div class="title">' + item.label.title + '</div>\n              <div class="name">' + item.label.name + '</div>\n            </figcaption>\n            <div class="img-container">\n              <img class="img" src="' + item.label.image + '" alt="">\n            </div>\n          </figure>\n        </a>\n        <div class="content-container lity-hide" id="l-' + type + '-' + (idx + 1) + '">\n          <div class="text-container">\n            <h5 class="title">' + item.content.title + '</h5>\n            ' + para + '\n          </div>\n        </div>\n      </div>\n    ';
  });
  return output;
};

// if from external JSON file
// fetch('./data/core-team.json')
//   .then(res => res.json())
//   .then((json) => {
//     coreTeamWrapper.innerHTML = obj2HTML(json);
//   });

/* global coreTeam, boardOfDirectors */
coreTeamWrapper.innerHTML = obj2HTML(coreTeam, 'team');
boardWrapper.innerHTML = obj2HTML(boardOfDirectors, 'board');