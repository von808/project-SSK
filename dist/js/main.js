// BURGER
const body = document.querySelector('body');
const burgerBtn = document.querySelectorAll('.burger-btn');
const burgerList = document.querySelector('.burger__list');
const burgerBtnIcon = document.querySelector('.burger-btn-icon');

burgerBtnIcon.onclick = function () {
  burgerBtnIcon.classList.toggle('active');
  burgerList.classList.toggle('active');
  body.classList.toggle('lock');
}

// FOR-EACH-FUNCTION
document.addEventListener('DOMContentLoaded', () => {
  // TEXT-SHOW
  (function () {
    var caseItem = document.querySelectorAll('.text-show-btn'),
      active = document.getElementsByClassName('text-show');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('text-show');

        this.classList.toggle('text-show');
      });
    });
  })();

  // IKEA-PIC
  (function () {
    var caseItem = document.querySelectorAll('.img-pointer__point'),
      active = document.getElementsByClassName('selected');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('selected');

        this.classList.toggle('selected');
      });
    });
  })();

  // FOOTER-ACCARDION
  (function () {
    var caseItem = document.querySelectorAll('.footer__content-item-head'),
      active = document.getElementsByClassName('active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('active');

        this.classList.toggle('active');
      });
    });
  })();

  // FAQ-ACCARDION
  (function () {
    var caseItem = document.querySelectorAll('.faq__item-head'),
      active = document.getElementsByClassName('active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('active');

        this.classList.toggle('active');
      });
    });
  })();

  // DROPLIST
  (function () {
    var caseItem = document.querySelectorAll('.droplist-control'),
      active = document.getElementsByClassName('active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('active');

        this.classList.toggle('active');
      });
    });
  })();

  // OVERLAY
  (function () {
    var caseItem = document.querySelectorAll('.overlay-full'),
      active = document.getElementsByClassName('active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('active');

        this.classList.toggle('active');
      });
    });
  })();

  const overlayActive = document.querySelector('#overlay-active')
  const overlay = document.querySelector('.overlay-full')

  overlayActive.onclick = function () {
    overlay.classList.add('active');
    body.classList.add('lock');
  };

  overlay.onclick = function () {
    overlayActive.classList.remove('active');
    body.classList.remove('lock');
    overlay.classList.remove('active');
  };

  // MAP-TOOLTIP
  (function () {
    var caseItem = document.querySelectorAll('.map__marker-btn'),
      active = document.getElementsByClassName('show');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('show');

        this.classList.toggle('show');
      });
    });
  })();

  // CATALOG-COMPACT-BTN
  (function () {
    var caseItem = document.querySelectorAll('.header-compact__nav-item--link'),
      active = document.getElementsByClassName('active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('active');

        this.classList.toggle('active');
      });
    });
  })();

  // BRANDS-TABS
  const brandsBtn = document.querySelectorAll('.brands__tabs-btn')
  const brandsItem = document.querySelectorAll('.brands__tabs-item')

  brandsBtn.forEach(brandsTabClick);

  function brandsTabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('activeBr')) {

        brandsBtn.forEach(function (item) {
          item.classList.remove('activeBr');
        });

        brandsItem.forEach(function (item) {
          item.classList.remove('activeBr');
        });

        currentBtn.classList.add('activeBr');
        currentTab.classList.add('activeBr');
      }
    })
  }

  document.querySelector('.brands__tabs-btn:nth-child(1)').click();

  // OUT-CATEGORY

  const headerCategoryBtn = document.querySelectorAll('.header-category__title')
  const headerCategoryItem = document.querySelectorAll('.sub-category__item')

  headerCategoryBtn.forEach(subCategoryClick);

  function subCategoryClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active1')) {

        headerCategoryBtn.forEach(function (item) {
          item.classList.remove('active1');
        });

        headerCategoryItem.forEach(function (item) {
          item.classList.remove('active1');
        });

        currentBtn.classList.add('active1');
        currentTab.classList.add('active1');
      }
    })
    document.querySelector('.header-category__title:nth-child(1)').click();
  }

  // PRODUCTS-VIEWS-BTN
  // (function () {
  //   var caseItem = document.querySelectorAll('.view-btn'),
  //     active = document.getElementsByClassName('view-selected');

  //   Array.from(caseItem).forEach(function (item, i, caseItem) {
  //     item.addEventListener('click', function (e) {
  //       if (active.length > 0 && active[0] !== this)
  //         active[0].classList.remove('view-selected');

  //       this.classList.toggle('view-selected');
  //     });
  //   });
  // })();

  // PRODUCT-CARD
  const products = document.querySelectorAll('.line-swiper1__img-box');

  if (products) {
    products.forEach(el => {
      let currentProduct = el;
      const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
      const imagePagination = currentProduct.querySelector('.image-pagination');
      if (imageSwitchItems.length > 1) {
        imageSwitchItems.forEach((el, index) => {
          el.setAttribute('data-index', index);
          imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
          el.addEventListener('mouseenter', (e) => {
            currentProduct.querySelectorAll('.image-pagination__item').forEach(el => { el.classList.remove('image-pagination__item--active') });
            currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
          });

          el.addEventListener('mouseleave', (e) => {
            currentProduct.querySelectorAll('.image-pagination__item').forEach(el => { el.classList.remove('image-pagination__item--active') });
            currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
          });
        });
      }
    });
  }
});

// FOOTER-ACCARDION
document.querySelectorAll('.footer__content-item-head').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.footer__content-item-body').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.footer__content-item-body').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

// FAQ-ACCARDION
document.querySelectorAll('.faq__item-head').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.faq__item-body').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.faq__item-body').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

// DROPDOWN
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});

// HEADER-CATALOG
const catalogBtn = document.querySelector('.header-compact__left');
const catalog = document.querySelector('.header-catalog');
const catalogCompactInner = document.querySelector('.header-catalog__content--inner');
const headerCompact = document.querySelector('.header-compact__inner');

catalogBtn.onclick = function () {
  catalogBtn.classList.toggle('selected')
  catalog.classList.toggle('show')
  catalogCompactInner.classList.toggle('show')
  headerCompact.classList.toggle('change')

  catalogCompact1.classList.remove('show')
  catalogCompact2.classList.remove('show')
  catalogCompact3.classList.remove('show')
  catalogCompact4.classList.remove('show')
}

const catalogCompactBtn1 = document.querySelector('.header-compact__nav-item--link-1');
const catalogCompactBtn2 = document.querySelector('.header-compact__nav-item--link-2');
const catalogCompactBtn3 = document.querySelector('.header-compact__nav-item--link-3');
const catalogCompactBtn4 = document.querySelector('.header-compact__nav-item--link-4');
const catalogCompact1 = document.querySelector('.header-catalog__content--1');
const catalogCompact2 = document.querySelector('.header-catalog__content--2');
const catalogCompact3 = document.querySelector('.header-catalog__content--3');
const catalogCompact4 = document.querySelector('.header-catalog__content--4');

catalogCompactBtn1.onclick = function () {
  catalogCompact1.classList.toggle('show')
  catalogCompact2.classList.remove('show')
  catalogCompact3.classList.remove('show')
  catalogCompact4.classList.remove('show')

  catalogBtn.classList.remove('selected')
  catalog.classList.remove('show')
  catalogCompactInner.classList.remove('show')
  headerCompact.classList.remove('change')
}

catalogCompactBtn2.onclick = function () {
  catalogCompact1.classList.remove('show')
  catalogCompact2.classList.toggle('show')
  catalogCompact3.classList.remove('show')
  catalogCompact4.classList.remove('show')

  catalogBtn.classList.remove('selected')
  catalog.classList.remove('show')
  catalogCompactInner.classList.remove('show')
  headerCompact.classList.remove('change')
}

catalogCompactBtn3.onclick = function () {
  catalogCompact1.classList.remove('show')
  catalogCompact2.classList.remove('show')
  catalogCompact3.classList.toggle('show')
  catalogCompact4.classList.remove('show')

  catalogBtn.classList.remove('selected')
  catalog.classList.remove('show')
  catalogCompactInner.classList.remove('show')
  headerCompact.classList.remove('change')
}

catalogCompactBtn4.onclick = function () {
  catalogCompact1.classList.remove('show')
  catalogCompact2.classList.remove('show')
  catalogCompact3.classList.remove('show')
  catalogCompact4.classList.toggle('show')

  catalogBtn.classList.remove('selected')
  catalog.classList.remove('show')
  catalogCompactInner.classList.remove('show')
  headerCompact.classList.remove('change')
}

// GO-TOP

// const goTopBtn = document.querySelector(".top-up");

// window.addEventListener("scroll", trackScroll);

// goTopBtn.addEventListener("click", goTop);

// function trackScroll() {
//   const scrolled = window.pageYOffset;
//   const coords = document.documentElement.clientHeight;
//   if (scrolled > coords) {
//     goTopBtn.classList.add("go-top--show");
//   } else {
//     goTopBtn.classList.remove("go-top--show");
//   }
// }

// function goTop() {
//   if (window.pageYOffset > 0) {
//     window.scrollBy(0, -75);
//     setTimeout(goTop, 0);
//   }
// }