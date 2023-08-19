import Masonry from 'masonry-layout';
export const gallery = () => {
  const elem = document.querySelector('.grid');
  console.log('elem :>> ', elem);

  const msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: 80,
    gutter: 43,
  });
};
