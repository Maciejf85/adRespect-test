import Masonry from 'masonry-layout';

export const gallery = () => {
  const elem = document.querySelector('.grid');
  const showMore = document.querySelector('.js-more-btn');

  const checkCnt = () => {
    const hiddenElems = document.querySelectorAll('.grid-item--hidden');
    if (hiddenElems.length === 0) {
      showMore.classList.add('hidden');
      elem.classList.add('hidden');
    }
  };

  // eslint-disable-next-line no-unused-vars
  const msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    gutter: 43,
    fitWidth: true,
  });

  if (showMore) {
    showMore.addEventListener('click', (e) => {
      e.preventDefault();
      const elemHidden = document.querySelectorAll('.grid-item--hidden');

      elemHidden.forEach((item) => item.classList.remove('grid-item--hidden'));
      msnry.layout();
      checkCnt();
    });
  }
  checkCnt();
};
