$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button--next",
      prevEl: ".swiper-button--prev",
    },
  });

  const reviewSwiper = new Swiper(".reviews-swiper", {
    loop: true,
    navigation: {
      nextEl: ".reviews-swiper__button--next",
      prevEl: ".reviews-swiper__button--prev",
    },
  });

  const pronaSwiper = new Swiper(".proba-swiper", {
    loop: true,
    navigation: {
      nextEl: ".reviews-swiper__button--next",
      prevEl: ".reviews-swiper__button--prev",
    },
  });

  $(".navbar-top__menu-button").on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  $(".modal-button").on("click", function () {
    $($(this).attr("data-href")).addClass("modal--visible");
  });

  $(".modal__close").on("click", function () {
    $(".modal").removeClass("modal--visible");
  });
});
