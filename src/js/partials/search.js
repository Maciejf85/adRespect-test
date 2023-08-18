// eslint-disable-next-line import/prefer-default-export
export const search = () => {
  const searchIcon = document.querySelector('.js-search');

  if (searchIcon) {
    searchIcon.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
};
