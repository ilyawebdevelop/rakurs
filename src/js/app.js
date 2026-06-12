import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introServSlider
const introServSlider = document.querySelector('.introServSlider');
var mySwiperIntroServ = new Swiper(introServSlider, {
  slidesPerView: 2,
  speed: 1500,
  spaceBetween: 10,
  // autoHeight: 'true',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

// Инициализация слайдера advSlider
document.querySelectorAll('.advSlider').forEach(n => {
  const mySwiperAdv = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});

// Инициализация слайдера servMainSlider
document.querySelectorAll('.servMainSlider').forEach(n => {
  const mySwiperServicesSlider = new Swiper(n, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 600,
    autoplay: false,
    navigation: {
      prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });
});

// Инициализация слайдера teamSlider
const teamSlider = document.querySelector('.teamSlider');
var mySwiperTeam = new Swiper(teamSlider, {
  slidesPerView: 'auto',
  speed: 600,
  spaceBetween: 20,
  // autoHeight: 'true',
  navigation: {
    prevEl: teamSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: teamSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
});

// Инициализация слайдера resultSlider
document.querySelectorAll('.resultSlider').forEach(n => {
  const mySwiperResult = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    // autoplay: true,
    thumbs: { // указываем на превью слайдер
      swiper: {
        el: n.closest('.sliderW').querySelector('.resultThumbSlider'),
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 600,
        watchSlidesProgress: true,
      }
    },
  });
});

// Инициализация слайдера galSlider
const galSlider = document.querySelector('.galSlider');
var mySwiperGal = new Swiper(galSlider, {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 20,
  // autoHeight: 'true',
  navigation: {
    prevEl: galSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: galSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
});

// Инициализация слайдера certSlider
const certSlider = document.querySelector('.certSlider');
var mySwiperCert = new Swiper(certSlider, {
  slidesPerView: 2,
  speed: 600,
  spaceBetween: 10,
  // autoHeight: 'true',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: certSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: certSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
});

// Инициализация слайдера portfolioSlider
const portfolioSlider = document.querySelector('.portfolioSlider');
var mySwiperPortfolio = new Swiper(portfolioSlider, {
  slidesPerView: 3,
  speed: 600,
  spaceBetween: 20,
  // autoHeight: 'true',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: portfolioSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: portfolioSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
});

// Инициализация слайдера reviewsSlider
const reviewsSlider = document.querySelector('.reviewsSlider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 3,
  speed: 600,
  spaceBetween: 20,
  // autoHeight: 'true',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: reviewsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: reviewsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
});

function map() {
  const contactsMap = document.querySelector(".maps__map");
  if (contactsMap) {
    const center = JSON.parse(contactsMap.dataset.center);
    const zoom = Number(contactsMap.dataset.zoom);
    function init() {
      const htmlMap = new ymaps.Map(contactsMap, {
        center,
        zoom
      });
      htmlMap.controls.remove("geolocationControl");
      htmlMap.controls.remove("searchControl");
      htmlMap.controls.remove("trafficControl");
      htmlMap.controls.remove("typeSelector");
      htmlMap.controls.remove("fullscreenControl");
      htmlMap.controls.remove("rulerControl");
      htmlMap.behaviors.disable(["scrollZoom"]);
    }
    ymaps.ready(init);
  }
}

map();

$('.accordItemHead').click(function () {
  $(this).toggleClass('active');
  $(this).siblings('.accordItemBody').slideToggle();
});

function handlerCookie() {
  const item = document.querySelector(".cookie");
  if (item) {
    const btnClose = item.querySelector(".cookie__close");
    const btnSubmit = item.querySelector(".cookie__btn");
    btnClose.addEventListener("click", () => {
      item.style.opacity = 0;
      item.style.visibility = 'hidden';
      setTimeout(() => {
        item.remove();
      }, 300);
    });
    btnSubmit.addEventListener("click", () => {
      sessionStorage.setItem('_cookies-event-showed', 1);
      item.style.opacity = 0;
      item.style.visibility = 'hidden';
      setTimeout(() => {
        item.remove();
      }, 300);
    });
  }

  if (!sessionStorage.getItem('_cookies-event-showed')) {
    item.style.opacity = 1;
    item.style.visibility = 'visible';
  }
}

handlerCookie();

const mediaQueryMin1200 = window.matchMedia('(min-width: 1200px)');
const mediaQueryMax1199 = window.matchMedia('(max-width: 1199px)');

if (mediaQueryMin1200.matches) {

  let subMenuTimer; // Таймер для скрытия подменю

  $('.menu-item-has-children>a').on('mouseenter', function () {
    // Очищаем таймер, если он был установлен (например, при быстром наведении с одного пункта на другой)
    clearTimeout(subMenuTimer);

    const $link = $(this);
    const $subMenu = $('.headerServices'); // Находим подменю, которое идет сразу после .menu-link

    // Проверяем, есть ли у этого .menu-link подменю
    if ($subMenu.length) {
      // Убираем класс 'is-visible' у ВСЕХ подменю, чтобы обновить состояние
      // перед тем, как показать нужное. Это важно, если у вас несколько пунктов с подменю.
      $('.headerServices').removeClass('active');
      // Затем добавляем класс нужному подменю
      $subMenu.addClass('active');
    }
  });

  $('.menu-item-has-children>a').on('mouseleave', function () {
    // При уходе с .menu-link, запускаем таймер для скрытия подменю
    subMenuTimer = setTimeout(function () {
      // Ищем ВСЕ подменю и скрываем их
      // (вдруг пользователь ушел с пункта, но еще не зашел на подменю)
      $('.headerServices').removeClass('active');
    }, 1000); // 1000 миллисекунд = 1 секунда
  });

  // Важно: При наведении МЫШЬЮ на само подменю, таймер должен сбрасываться,
  // чтобы подменю не исчезло, пока пользователь им пользуется.
  $('.headerServices').on('mouseenter', function () {
    clearTimeout(subMenuTimer); // Сбрасываем таймер
  });

  // При уходе с подменю, снова запускаем таймер для его скрытия.
  // Это нужно, если пользователь "ушел" с подменю (например, нажал на ссылку внутри него).
  $('.headerServices').on('mouseleave', function () {
    subMenuTimer = setTimeout(function () {
      $(this).removeClass('active'); // Скрываем подменю, с которого ушли
    }.bind(this), 500); // Привязываем 'this' к самому .sub-menu
  });

}
if (mediaQueryMax1199.matches) {
  jQuery('.menu-item-has-children>a').click(function (event) {
    event.preventDefault();
    jQuery(this).toggleClass('active');
    jQuery(this).siblings('.headerServices').slideToggle();
  });
}

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const btnClose = document.getElementById('headerNavMobileClose');
let bodyEl = document.querySelector('body');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});
