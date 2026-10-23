const swiper = new Swiper('.swiper', {
  slidesPerView: 7,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
});

const headerSubmenu = document.querySelectorAll('.header-submenu');
const headerBottomLi = document.querySelectorAll('#header-bottom > ul > li');
const submenuBg = document.querySelector('.submenu-bg');

headerBottomLi.forEach((v, k) => {
  v.addEventListener('mouseenter', () => {
    headerSubmenu.forEach((v, k) => {
      v.classList.add('active');
    });

    submenuBg.classList.add('active');
  });

  v.addEventListener('mouseleave', () => {
    headerSubmenu.forEach((v, k) => {
      v.classList.remove('active');
    });

    submenuBg.classList.remove('active');
  });
});
