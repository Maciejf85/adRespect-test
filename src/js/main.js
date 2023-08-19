import '@iconfu/svg-inject';
import { search } from './partials/search';
import { swiperJs } from './partials/swiper';
import { gallery } from './partials/gallery';

window.addEventListener('load', () => {
  SVGInject(document.querySelectorAll('img.injectable'));
  search();
  swiperJs();
  gallery();
});
