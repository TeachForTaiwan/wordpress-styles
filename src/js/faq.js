const closeFAQs = () => {
  const faqTypeContainers = document.querySelectorAll('.faq-type-container');
  faqTypeContainers.forEach((item) => {
    item.classList.remove('is-active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelector('#faq');
  const faqBricks = faq.querySelectorAll('.brick');
  const faqTitles = faq.querySelectorAll('.faq-group .title-container');

  faqBricks.forEach((brick) => {
    brick.addEventListener('click', (e) => {
      const targetType = e.currentTarget.dataset.type;
      const targetEl = document.querySelector(`#faq-${targetType}`);

      faqBricks.forEach((item) => {
        item.classList.remove('is-active');
      });
      e.currentTarget.classList.add('is-active');
      closeFAQs();
      targetEl.classList.toggle('is-active');
    });
  });

  faqTitles.forEach((title) => {
    title.addEventListener('click', (e) => {
      const targetContent = e.currentTarget.nextElementSibling || e.currentTarget.nextSibling;
      targetContent.classList.toggle('is-active');
    });
  });
});
