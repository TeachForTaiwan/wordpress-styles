document.addEventListener('DOMContentLoaded', () => {
  const type = d3.select('.sponser')
    .selectAll('div')
    .data(dataSponser)
    .enter()
    .append('div')
    .classed('content-placeholder', true)

  const content = type
    .append('div')
    .classed('article-content', true)

  const contentType = content
    .append('h2')
    .append('span')
    .classed('red1', true)
    .text(d => d.type)

  const list = content
    .append('div')
    .classed('partner-listing', true)

  const item = list
    .selectAll('figure')
    .data(d => d.list)
    .enter()
    .append('figure')

  const img = item
    .filter(d => d.logo)
    .append('div')
    .classed('partner-img', true)
    .append('a')
    .attr('href', (d) => {
      return d.url ? d.url : 'javascript:;'
    })
    .attr('target', '_blank')
    .attr('rel', 'noopener')
    .append('img')
    .attr('src', d => d.logo)
    .attr('alt', d => d.name)

  const name = item
    .append('figcaption')
    .classed('partner-name', true)
    .text(d => d.name)

  const intro = item
    .filter(d => d.intro)
    .append('div')
    .classed('intro', true)
    .selectAll('p')
    .data(d => d.intro)
    .enter()
    .append('p')
    .text(d => d)

  // intro event
  const sponsers = document.querySelectorAll('.partner-listing figure');
  const introContent = document.querySelector('.intro-content');
  const hasIntro = (el) => {
    return !!el.querySelector('.intro');
  };
  const showIntro = (el) => {
    if (!hasIntro(el)) return false;
    el.classList.add('intro-show');
  };
  const fadeIntro = (el) => {
    if (!hasIntro(el)) return false;
    el.classList.remove('intro-show');
  }
  [].forEach.call(sponsers, (item) => {
    item.addEventListener('mouseenter', (e) => {
      const target = e.currentTarget;
      showIntro(target);
    });
    item.addEventListener('mouseleave', (e) => {
      const target = e.currentTarget;
      fadeIntro(target);
    })
  });
});

