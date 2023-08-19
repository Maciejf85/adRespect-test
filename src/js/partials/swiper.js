import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';

export const swiperJs = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
