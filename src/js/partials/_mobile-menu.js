export const mobileMenu = () => {
  const burger = document.querySelector('.js-burger');
  const mobile = document.querySelector('.js-mobile');
  const headerMenu = document.querySelector('.o-header__menu');
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const header = document.querySelector('.o-header');

  const mobileEls = mobile.querySelectorAll('li > a');

  function blockWindow() {
    if (mobile.classList.contains('active')) {
      body.classList.add('blocked');
      html.classList.add('blocked');
    } else {
      body.classList.remove('blocked');
      html.classList.remove('blocked');
    }
  }

  mobileEls.forEach((item) =>
    item.addEventListener('click', () => {
      mobile.classList.remove('active');
      header.classList.remove('active');
      burger.classList.remove('active');
      blockWindow();
    }),
  );

  if (burger) {
    // eslint-disable-next-line prefer-arrow-callback
    burger.addEventListener('click', function (e) {
      e.preventDefault();

      if (header) header.classList.toggle('active');
      headerMenu.classList.toggle('hidden');
      mobile.classList.toggle('active');

      this.classList.toggle('active');
      blockWindow();
    });
  }
};
