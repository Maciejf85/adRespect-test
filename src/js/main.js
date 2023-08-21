import '@iconfu/svg-inject';
import { search } from './partials/_search';
import { swiperJs } from './partials/_swiper';
import { gallery } from './partials/_gallery';
import { lightbox2Options } from './partials/_lightbox2';

window.addEventListener('load', () => {
  // eslint-disable-next-line no-undef
  SVGInject(document.querySelectorAll('img.injectable'));
  search();
  swiperJs();
  gallery();
  lightbox2Options();
});
