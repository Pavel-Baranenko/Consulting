


// document.addEventListener('DOMContentLoaded', function () {
//   const firstImg = document.querySelectorAll('.banner-img1');
//   const secondImd = document.querySelectorAll('.banner-img2');
//   const thirdImd = document.querySelectorAll('.banner-img3');
//   console.log("yes");
//   console.log(window.screen.width);
//   if (window.screen.width < 1024) {
//     // console.log(firstImg[0]);
//     firstImg[0].querySelector('img').src = './animation/bubble-first-mob.gif';
//     firstImg[1].querySelector('img').src = './animation/bubble-first-mob.gif';
//     secondImd[0].querySelector('img').src = './animation/mark-mob.gif';
//     secondImd[1].querySelector('img').src = './animation/mark-mob.gif';
//     thirdImd[0].querySelector('img').src = './animation/hand-new-mob.webp';
//     thirdImd[1].querySelector('img').src = './animation/hand-new-mob.webp';
//   }
//   else if (window.screen.width > 1024) {
//     firstImg[0].querySelector('img').src = './animation/bubble-first.webp';
//     firstImg[1].querySelector('img').src = './animation/bubble-first.webp';
//     secondImd[0].querySelector('img').src = './animation/mark.webp';
//     secondImd[1].querySelector('img').src = './animation/mark.webp';
//     thirdImd[0].querySelector('img').src = './animation/hand-new.webp';
//     thirdImd[1].querySelector('img').src = './animation/hand-new.webp';
//   }
// });


const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  parallax: true,
  spaceBetween: 200,
  speed: 800,
  sensitivity: 1,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    320: {
      speed: 2000,
      spaceBetween: 500
    },

    640: {
      speed: 800,
      spaceBetween: 200
    }
  },
});

const arrow = document.querySelector('.arrow-svg');

const slides = document.querySelectorAll('.banner-slide');

slides.forEach((el) => {
  el.addEventListener('mouseover', function () {
    $.fn.pagepiling.setAllowScrolling(false);
  });
  el.addEventListener('touchstart', function () {
    $.fn.pagepiling.setAllowScrolling(false);
    // bannerSwiper.slidePrev();
  })
  el.addEventListener('touchmove', function () {
    $.fn.pagepiling.setAllowScrolling(false);
    // bannerSwiper.slideNext();
  })
})
document.querySelector('.banner-slide-last').addEventListener('mouseover', function () {
  $.fn.pagepiling.setAllowScrolling(true);
})
document.querySelector('.banner-slide-last').addEventListener('touchstart', function () {
  $.fn.pagepiling.setAllowScrolling(true);
})
document.querySelector('.banner-slide-last').addEventListener('touchmove', function () {
  $.fn.pagepiling.setAllowScrolling(true);
})

document.querySelector('.slide-one').addEventListener('touchmove', function () {
  // $.fn.pagepiling.setAllowScrolling(true);
  bannerSwiper.slideTo(1);

})
document.querySelector('.slide-two').addEventListener('touchmove', function () {
  // $.fn.pagepiling.setAllowScrolling(true);
  bannerSwiper.slideTo(2);

})



bannerSwiper.on('slideChange', function () {
  if (bannerSwiper.activeIndex == 0) {
    arrow.classList.remove('visible');
  }
  else {
    arrow.classList.add('visible');
  }
});


arrow.addEventListener('click', () => {
  window.location = "#page1";
  bannerSwiper.slideTo(0, 0);
  arrow.classList.add('rotate');
  arrow.classList.remove('visible');
})


document.querySelector('.header__menu-link-cont').addEventListener('click', () => {
  window.location = "#page10";
  $.fn.pagepiling.setAllowScrolling(true);
})

document.querySelector('.header__menu-link-dist').addEventListener('click', () => {
  window.location = "#page1";
  bannerSwiper.slideTo(0, 0);
  arrow.classList.add('rotate');
  arrow.classList.remove('visible');
  document.querySelector('.header__menu').classList.remove('active');
})

const swiper = new Swiper('.swiper-content', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 60,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  parallax: true,
  speed: 800,
  mousewheel: {
    releaseOnEdges: true,
  },
});



document.querySelector('.strat-link').addEventListener('click', () => {
  window.location = "#page2";
  $.fn.pagepiling.setAllowScrolling(true);
})

document.querySelector('.mark-link').addEventListener('click', () => {
  window.location = "#page4";
  $.fn.pagepiling.setAllowScrolling(true);
})

document.querySelector('.web-link').addEventListener('click', () => {
  window.location = "#page6";
  $.fn.pagepiling.setAllowScrolling(true);
})