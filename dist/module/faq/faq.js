'use strict';

/* global faqData */
var data2FAQ = function data2FAQ(data) {
  var getBricks = function getBricks(bricks) {
    var html = '';
    bricks.forEach(function (brick) {
      html += '\n        <div class="brick" data-type="' + brick.type + '">' + brick.title + '</div>\n      ';
    });
    return '\n    <div class="faq-bricks">\n      ' + html + '\n    </div>\n  ';
  };

  var getTypeContents = function getTypeContents(obj) {
    var getTypeContent = function getTypeContent(groups) {
      var contents = groups.contents;
      var html = '';
      contents.forEach(function (content) {
        html += '\n          <div class="faq-group">\n            <div class="title-container">\n              <h3 class="q-title">' + content.q + '</h3>\n            </div>\n            <div class="content-container">\n              <p>' + content.a + '</p>\n            </div>\n          </div>\n        ';
      });
      return '\n        <div class="faq-type-container" id="faq-' + groups.type + '">\n          ' + html + '\n        </div>\n      ';
    };
    var html = '';
    obj.forEach(function (groups) {
      html += '\n        ' + getTypeContent(groups) + '\n      ';
    });
    return html;
  };
  var FAQBricks = [];
  var FAQGroups = [];

  data.forEach(function (dc) {
    var contents = [];

    dc.contents.forEach(function (content) {
      contents.push({
        q: content.q,
        a: content.a
      });
    });

    FAQBricks.push({
      title: dc.title,
      type: dc.type
    });

    FAQGroups.push({
      type: dc.type,
      contents: contents
    });
  });

  return '\n    ' + (getBricks(FAQBricks) + getTypeContents(FAQGroups)) + '\n  ';
};

var closeFAQs = function closeFAQs() {
  var faqTypeContainers = document.querySelectorAll('.faq-type-container');
  faqTypeContainers.forEach(function (item) {
    item.classList.remove('is-active');
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var faq = document.querySelector('#faq');
  // 可指定預設開啟的選項
  var order = faq.getAttribute('order');
  if (!faq) return;

  faq.innerHTML = data2FAQ(faqData);
  var faqBricks = faq.querySelectorAll('.brick');
  var faqTitles = faq.querySelectorAll('.faq-group .title-container');

  faqBricks.forEach(function (brick) {
    brick.addEventListener('click', function (e) {
      var targetType = e.currentTarget.dataset.type;
      var targetEl = document.querySelector('#faq-' + targetType);

      faqBricks.forEach(function (item) {
        item.classList.remove('is-active');
      });
      e.currentTarget.classList.add('is-active');
      closeFAQs();
      targetEl.classList.toggle('is-active');
    });
  });

  faqTitles.forEach(function (title) {
    title.addEventListener('click', function (e) {
      var targetContent = e.currentTarget.nextElementSibling || e.currentTarget.nextSibling;
      title.classList.toggle('is-active');
      targetContent.classList.toggle('is-active');
    });
  });

  if (order) {
    faqBricks[+order].click();
  }
});