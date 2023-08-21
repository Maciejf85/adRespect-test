// eslint-disable-next-line import/prefer-default-export
export const search = () => {
  const searchIcon = document.querySelector('.js-search');
  const searchBar = document.querySelector('.js-searchBar');

  if (searchIcon && searchBar) {
    searchIcon.addEventListener('click', function () {
      this.classList.toggle('active');
      searchBar.classList.toggle('active');
    });
  }
};
