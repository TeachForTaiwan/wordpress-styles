/* global faqData */
const data2FAQ = (data) => {
  const getBricks = (bricks) => {
    let html = '';
    bricks.forEach((brick) => {
      html += `
        <div class="brick" data-type="${brick.type}">${brick.title}</div>
      `;
    });
    return `
    <div class="faq-bricks">
      ${html}
    </div>
  `;
  };

  const getTypeContents = (obj) => {
    const getTypeContent = (groups) => {
      const contents = groups.contents;
      let html = '';
      contents.forEach((content) => {
        html += `
          <div class="faq-group">
            <div class="title-container">
              <h3 class="q-title">${content.q}</h3>
            </div>
            <div class="content-container">
              <p>${content.a}</p>
            </div>
          </div>
        `;
      });
      return `
        <div class="faq-type-container" id="faq-${groups.type}">
          ${html}
        </div>
      `;
    };
    let html = '';
    obj.forEach((groups) => {
      html += `
        ${getTypeContent(groups)}
      `;
    });
    return html;
  };
  const FAQBricks = [];
  const FAQGroups = [];

  data.forEach((dc) => {
    const contents = [];

    dc.contents.forEach((content) => {
      contents.push({
        q: content.q,
        a: content.a,
      });
    });

    FAQBricks.push({
      title: dc.title,
      type: dc.type,
    });

    FAQGroups.push({
      type: dc.type,
      contents,
    });
  });

  return `
    ${getBricks(FAQBricks) + getTypeContents(FAQGroups)}
  `;
};

const closeFAQs = () => {
  const faqTypeContainers = document.querySelectorAll('.faq-type-container');
  faqTypeContainers.forEach((item) => {
    item.classList.remove('is-active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelector('#faq');
  faq.innerHTML = data2FAQ(faqData);
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
      title.classList.toggle('is-active');
      targetContent.classList.toggle('is-active');
    });
  });
});
