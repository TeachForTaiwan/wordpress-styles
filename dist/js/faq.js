'use strict';

var closeFAQs = function closeFAQs() {
  var faqTypeContainers = document.querySelectorAll('.faq-type-container');
  faqTypeContainers.forEach(function (item) {
    item.classList.remove('is-active');
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var faq = document.querySelector('#faq');
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
      targetContent.classList.toggle('is-active');
    });
  });
});