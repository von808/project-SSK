const tabBtn = document.querySelectorAll('.tabA-btn')
const tabItem = document.querySelectorAll('.tabA-item')

tabBtn.forEach(tabClick);

function tabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('tab-active')) {

      tabBtn.forEach(function (item) {
        item.classList.remove('tab-active');
      });

      tabItem.forEach(function (item) {
        item.classList.remove('tab-active');
      });

      currentBtn.classList.add('tab-active');
      currentTab.classList.add('tab-active');
    }
  })
}

// TAB-CUSTOMER-TITLE
const tabCustomerBtn1 = document.querySelector('.tab-customer-btn-1');
const tabCustomerBtn2 = document.querySelector('.tab-customer-btn-2');
const tabCustomerBtn3 = document.querySelector('.tab-customer-btn-3');

const tabCustomerTitle1 = document.querySelector('.tab-customer-title-1');
const tabCustomerTitle2 = document.querySelector('.tab-customer-title-2');
const tabCustomerTitle3 = document.querySelector('.tab-customer-title-3');

tabCustomerBtn1.onclick = function () {
  tabCustomerTitle1.classList.add('tab-customer-active')
  tabCustomerTitle2.classList.remove('tab-customer-active')
  tabCustomerTitle3.classList.remove('tab-customer-active')
}

tabCustomerBtn2.onclick = function () {
  tabCustomerTitle1.classList.remove('tab-customer-active')
  tabCustomerTitle2.classList.add('tab-customer-active')
  tabCustomerTitle3.classList.remove('tab-customer-active')
}

tabCustomerBtn3.onclick = function () {
  tabCustomerTitle1.classList.remove('tab-customer-active')
  tabCustomerTitle2.classList.remove('tab-customer-active')
  tabCustomerTitle3.classList.add('tab-customer-active')
}