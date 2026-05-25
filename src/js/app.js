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
    576: {
      slidesPerView: 2,
    },
  },
});

// Инициализация слайдера productSlider
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
      // 0: {
      //   slidesPerView: 2,
      //   spaceBetween: 10,
      // },
      // 992: {
      //   slidesPerView: 3,
      //   spaceBetween: 10,
      // },
      // 1200: {
      //   slidesPerView: 4,
      //   spaceBetween: 15,
      // },
      // 1400: {
      //   spaceBetween: 27,
      // },
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