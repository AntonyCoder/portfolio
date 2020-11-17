//слайдер
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//карта
var map;
var marker;
function initMap() {
  map = new ymaps.Map("yandexmap", {
    center: [47.255866, 38.893980],
    zoom: 18
  });
  marker = new ymaps.Placemark([47.255866, 38.893980], {
  });
  map.geoObjects.add(marker);
}
ymaps.ready(initMap);

//плавная прокрутка
$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});

// зафиксированное меню
jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 160) {
      $('#navigation').addClass('fixed');
    }
    else if ($(this).scrollTop() < 160) {
      $('#navigation').removeClass('fixed');
    }
  });
});