import lightbox2 from 'lightbox2/dist/js/lightbox-plus-jquery';

export const lightbox2Options = () => {
  lightbox2.option({
    resizeDuration: 350,
    wrapAround: false,
    disableScrolling: true,
    fitImagesInViewport: true,
    showImageNumberLabel: false,
  });
};
