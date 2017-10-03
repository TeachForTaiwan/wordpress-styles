const configMobile = {
  pagination: '.swiper-pagination',
  slidesPerView: 1,
  slidesPerColumn: 2,
  paginationClickable: true,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
};
const configTablet = {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 3,
  slidesPerColumn: 2,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
};
const configDesktop = {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 4,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
};
const getSwiperConfig = (ww) => {
  if (ww < 600) {
    return configMobile;
  }
  if (ww < 900) {
    return configTablet;
  }
  if (ww >= 900) {
    return configDesktop;
  }
  return false;
};

/* eslint no-unused-vars:0 */
const swiper = new Swiper('.swiper-container', {
  ...getSwiperConfig(window.innerWidth),
  onAfterResize(s) {
    swiper.params = getSwiperConfig(window.innerWidth);
    s.update();
  },
});
