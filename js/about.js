// ADDRESS-TABS
const addressTabBtn1 = document.querySelector('.address-tab__btn--1');
const addressTabItem1 = document.querySelector('.addresses-list-switch');
const addressTabBtn2 = document.querySelector('.address-tab__btn--2');
const addressTabItem2 = document.querySelector('.map-switch');

addressTabBtn1.onclick = function () {
  addressTabBtn1.classList.add('selected')
  addressTabItem1.classList.add('selected')
  addressTabBtn2.classList.remove('selected')
  addressTabItem2.classList.remove('selected')
}

addressTabBtn2.onclick = function () {
  addressTabBtn1.classList.remove('selected')
  addressTabItem1.classList.remove('selected')
  addressTabBtn2.classList.add('selected')
  addressTabItem2.classList.add('selected')
}