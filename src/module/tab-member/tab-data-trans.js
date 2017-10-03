const coreTeamWrapper = document.querySelector('#core-team');
const boardWrapper = document.querySelector('#board');

const obj2HTML = (obj, type) => {
  let output = '';
  obj.forEach((item, idx) => {
    let para = '';
    item.content.para.forEach((p) => {
      para += `<p class="p">${p}</p>`;
    });
    output += `
      <div class="swiper-slide">
        <a href="#l-${type}-${idx + 1}" data-lity="data-lity">
          <figure class="item-set">
            <figcaption class="title-container">
              <div class="title">${item.label.title}</div>
              <div class="name">${item.label.name}</div>
            </figcaption>
            <div class="img-container">
              <img class="img" src="${item.label.image}" alt="">
            </div>
          </figure>
        </a>
        <div class="content-container lity-hide" id="l-${type}-${idx + 1}">
          <div class="text-container">
            <h5 class="title">${item.content.title}</h5>
            ${para}
          </div>
        </div>
      </div>
    `;
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
