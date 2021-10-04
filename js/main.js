$(document).ready(function ($) {
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

  $(".modal__form").each(function () {
    $(this).validate({
      errorClass: "invalidd",
      messages: {
        name: {
          required: "Надо - значит, надо!",
        },
        email: {
          required: "мыло вводи давай!",
          email: "Нормально вводи",
        },
      },
    });
  });

  // jQuery(function ($) {
  //   $("#phone-input").mask("+7 (999) 999-99-99");
  // $("#phone").mask("(999) 999-9999");
  // $("#tin").mask("99-9999999");
  // $("#ssn").mask("999-99-9999");
  // });
});

jQuery(function ($) {
  $("#phone-input").mask("+7 (999) 999-99-99");
});

AOS.init();
