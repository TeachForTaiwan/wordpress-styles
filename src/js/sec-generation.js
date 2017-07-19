const swiperConfig1 = {
  pagination: '.swiper-pagination',
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  grabcursor: true,
};

const swiperConfig2 = {
  pagination: '.swiper-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  grabcursor: true,
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 600) {
    const swiper = new Swiper('.swiper-container', swiperConfig1);
    console.log('teste1');
  } else {
    const swiper = new Swiper('.swiper-container', swiperConfig2);
    console.log('hey apple');
  }
});
