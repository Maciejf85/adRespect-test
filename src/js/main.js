import '@iconfu/svg-inject';
import { search } from './partials/search';
import { swiperJs } from './partials/swiper';

window.addEventListener('load', () => {
  SVGInject(document.querySelectorAll('img.injectable'));
  search();
  swiperJs();
});
