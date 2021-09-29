const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },

  // And if we need scrollbar
});

const reviewSwiper = new Swiper(".reviews-swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    // nextEl: ".reviews-swiper__button--next",
    nextEl: ".reviews-swiper__button--next",

    // prevEl: ".reviews-swiper__button--prev",
    prevEl: ".reviews-swiper__button--prev",
  },
});

const pronaSwiper = new Swiper(".proba-swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-swiper__button--next",
    // nextEl: ".swiper-button-prev",

    prevEl: ".reviews-swiper__button--prev",
    // prevEl: ".swiper-button-next",
  },

  // And if we need scrollbar
});

const menuButton = document.querySelector(".navbar-top__menu-button");
menuButton.addEventListener("click", function () {
  console.log("вижу клик");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
