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

// FOR-EACH-FUNCTION
document.addEventListener('DOMContentLoaded', () => {

  // OUT-CATEGORY
  (function () {
    var caseItem = document.querySelectorAll('.header-category__titles > a'),
      active = document.getElementsByClassName('active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('active');

        this.classList.toggle('active');
      });
    });
  })();
});

// OUT-CATEGORY
const headerCategory1 = document.querySelector('.line-swiper1__item--1');
const headerCategory2 = document.querySelector('.line-swiper1__item--2');
const headerCategory3 = document.querySelector('.line-swiper1__item--3');
const headerCategory4 = document.querySelector('.line-swiper1__item--4');
const headerCategory5 = document.querySelector('.line-swiper1__item--5');
const headerCategory6 = document.querySelector('.line-swiper1__item--6');
const headerCategory7 = document.querySelector('.line-swiper1__item--7');

headerCategory1.onclick = function () {
  headerCategory1.classList.toggle('selected')
}
headerCategory2.onclick = function () {
  headerCategory2.classList.toggle('selected')
}
headerCategory3.onclick = function () {
  headerCategory3.classList.toggle('selected')
}
headerCategory4.onclick = function () {
  headerCategory4.classList.toggle('selected')
}
headerCategory5.onclick = function () {
  headerCategory5.classList.toggle('selected')
}
headerCategory6.onclick = function () {
  headerCategory6.classList.toggle('selected')
}
headerCategory7.onclick = function () {
  headerCategory7.classList.toggle('selected')
}

// BRANDS-TABS
const brandsTabBtn1 = document.querySelector('.brands__tabs-btn--1');
const brandsTabItem1 = document.querySelector('.brands__tabs-item--1');
const brandsTabBtn2 = document.querySelector('.brands__tabs-btn--2');
const brandsTabItem2 = document.querySelector('.brands__tabs-item--2');
const brandsTabBtn3 = document.querySelector('.brands__tabs-btn--3');
const brandsTabItem3 = document.querySelector('.brands__tabs-item--3');
const brandsTabBtn4 = document.querySelector('.brands__tabs-btn--4');
const brandsTabItem4 = document.querySelector('.brands__tabs-item--4');

brandsTabBtn1.onclick = function () {
  brandsTabBtn1.classList.add('active')
  brandsTabBtn2.classList.remove('active')
  brandsTabBtn3.classList.remove('active')
  brandsTabBtn4.classList.remove('active')
  brandsTabItem1.classList.add('active')
  brandsTabItem2.classList.remove('active')
  brandsTabItem3.classList.remove('active')
  brandsTabItem4.classList.remove('active')
}
brandsTabBtn2.onclick = function () {
  brandsTabBtn1.classList.remove('active')
  brandsTabBtn2.classList.add('active')
  brandsTabBtn3.classList.remove('active')
  brandsTabBtn4.classList.remove('active')
  brandsTabItem1.classList.remove('active')
  brandsTabItem2.classList.add('active')
  brandsTabItem3.classList.remove('active')
  brandsTabItem4.classList.remove('active')
}
brandsTabBtn3.onclick = function () {
  brandsTabBtn1.classList.remove('active')
  brandsTabBtn2.classList.remove('active')
  brandsTabBtn3.classList.add('active')
  brandsTabBtn4.classList.remove('active')
  brandsTabItem1.classList.remove('active')
  brandsTabItem2.classList.remove('active')
  brandsTabItem3.classList.add('active')
  brandsTabItem4.classList.remove('active')
}
brandsTabBtn4.onclick = function () {
  brandsTabBtn1.classList.remove('active')
  brandsTabBtn2.classList.remove('active')
  brandsTabBtn3.classList.remove('active')
  brandsTabBtn4.classList.add('active')
  brandsTabItem1.classList.remove('active')
  brandsTabItem2.classList.remove('active')
  brandsTabItem3.classList.remove('active')
  brandsTabItem4.classList.add('active')
}
