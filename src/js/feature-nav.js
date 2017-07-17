// Add a tag to SiteOrigin Features
document.addEventListener('DOMContentLoaded', () => {
  const featureList = ['#sec-salon', '#sec-gallery', '#sec-manager', '#sec-generation'];
  const featureNavs = document.querySelectorAll('.feature-nav .sow-features-feature');
  featureNavs.forEach((el, idx) => {
    const thisEl = el;
    const newEL = `<a class="link" href="${featureList[idx]}">${el.innerHTML}</a>`;
    thisEl.innerHTML = newEL;
  });
});
