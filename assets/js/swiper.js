import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

const swiper = new Swiper('.swiper-1', {
  modules: [Navigation, Pagination, Autoplay, Grid],
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination-custom',
    type: "fraction"
  },
});

const swiper2 = new Swiper(".swiper-2", {
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const swiper3 = new Swiper(".swiper-3", {
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    fill: 'column',
    rows: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const swiper4 = new Swiper(".swiper-4", {
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    fill: 'column',
    rows: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});