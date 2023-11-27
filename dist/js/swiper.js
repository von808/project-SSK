document.addEventListener('DOMContentLoaded', () => {

  // SWIPERS
  var swiper = new Swiper(".bigSwiper1", {
    a11y: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".miniSwiper1", {
    a11y: false,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".lineSwiper1", {
    a11y: false,
    slidesPerView: 1.7,
    spaceBetween: 16,
    breakpoints: {
      540: {
        slidesPerView: 2.7,
        spaceBetween: 16,
      },
      700: {
        slidesPerView: 3.7,
        spaceBetween: 16,
      },
      900: {
        slidesPerView: 4.7,
        spaceBetween: 16,
      },
      1100: {
        slidesPerView: 5.7,
        spaceBetween: 16,
      },
      1300: {
        slidesPerView: 6.7,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  var swiper = new Swiper(".lineSwiperStocks", {
    a11y: false,
    slidesPerView: 1.9,
    spaceBetween: 16,
    breakpoints: {
      540: {
        slidesPerView: 1.9,
      },
      700: {
        slidesPerView: 2.2,
      },
      900: {
        slidesPerView: 2.5,
      },
      1100: {
        slidesPerView: 3.5,
      },
      1300: {
        slidesPerView: 3.5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  var swiper = new Swiper(".popular .lineSwiper1", {
    a11y: false,
    slidesPerView: 1.9,
    spaceBetween: 16,
    breakpoints: {
      540: {
        slidesPerView: 2.7,
        spaceBetween: 16,
      },
      700: {
        slidesPerView: 3.7,
        spaceBetween: 16,
      },
      900: {
        slidesPerView: 4.7,
        spaceBetween: 16,
      },
      1100: {
        slidesPerView: 5.7,
        spaceBetween: 16,
      },
      1300: {
        slidesPerView: 6.7,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  var swiper = new Swiper(".lineSwiper2", {
    a11y: false,
    slidesPerView: 1.1,
    spaceBetween: 16,
    breakpoints: {
      600: {
        slidesPerView: 1.8,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 16,
      },
      1000: {
        slidesPerView: 3.3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  var swiper = new Swiper(".lineSwiper2-auto", {
    a11y: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  var swiper = new Swiper(".brandsSwiper", {
    a11y: false,
    slidesPerView: 2.4,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      420: {
        slidesPerView: 2.8,
        spaceBetween: 16,
      },
      540: {
        slidesPerView: 3.4,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4.8,
        spaceBetween: 16,
      },
      1000: {
        slidesPerView: 5.4,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 16,
      },
    },
  });
  var swiper = new Swiper(".slider-reviews-stars", {
    a11y: false,
    slidesPerView: 2,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      360: {
        slidesPerView: 2.15,
      },
      460: {
        slidesPerView: 2.8,
      },
      540: {
        slidesPerView: 3.4,
      },
      630: {
        slidesPerView: 4.2,
      },
      768: {
        slidesPerView: 5,
      },
    },
  });

  // RESIZABLE-SWIPER

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 991px)',
    '.slider-product-card',
    {
      slidesPerView: 1,
      spaceBetween: 0,
      a11y: false,
      loop: false,
      pagination: false,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 991px)',
    '.slider-reviews-images',
    {
      slidesPerView: 2.4,
      spaceBetween: 16,
      a11y: false,
      loop: false,
      pagination: false,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        540: {
          slidesPerView: 4.5,
        },
        768: {
          slidesPerView: 6.5,
        },
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 991px)',
    '.slider-logos',
    {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      a11y: false,
      loop: false,
      pagination: false,
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 991px)',
    '.swiper-steps',
    {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      a11y: false,
      loop: false,
      pagination: false,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    },
    someFunc
  );

  // SLICK

  $(function initSlider() {

    const compairsSliders = document.querySelectorAll('.comparison__char-slides');
    const compairsCompactSliders = document.querySelectorAll('.comparison__head-slides');

    // $('.comparison__head-slides').slick({
    //   infinite: false,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   pagination: false,
    //   prevArrow: '<div class="swiper-button-prev"><span class="swiper-controls-overlay-single"></span><svg class="chevron-right"><use xlink:href="#chevron-right"></use></svg></div>',
    //   nextArrow: '<div class="swiper-button-next"><span class="swiper-controls-overlay-single"></span><svg class="chevron-right"><use xlink:href="#chevron-right"></use></svg></div>',
    //   asNavFor: compairsSliders,
    //   responsive: [
    //     {
    //       breakpoint: 1350,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //       }
    //     },
    //   ]
    // });

    compairsCompactSliders.forEach((el) => {
      $(el).slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pagination: false,
        prevArrow: '<div class="swiper-button-prev"><span class="swiper-controls-overlay-single"></span><svg class="chevron-right"><use xlink:href="#chevron-right"></use></svg></div>',
        nextArrow: '<div class="swiper-button-next"><span class="swiper-controls-overlay-single"></span><svg class="chevron-right"><use xlink:href="#chevron-right"></use></svg></div>',
        asNavFor: compairsSliders,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ],
      });
    });

    compairsSliders.forEach((el) => {
      $(el).slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pagination: false,
        arrows: false,
        swipe: false,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      });
    });
  })
});