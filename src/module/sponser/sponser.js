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

  const img = () => {
    item
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
  };
  img();

  const name = item
    .append('figcaption')
    .classed('partner-name', true)
    .text(d => d.name)

});
