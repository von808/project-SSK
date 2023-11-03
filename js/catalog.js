// PRODUCTS-VIEWS
if (document.documentElement.clientWidth > 768) {
  const productsBtn = document.querySelector('.view-btns');
  const productsItems1 = document.querySelector('.catalog-products__items-1');
  const productsItems2 = document.querySelector('.catalog-products__items-2');
  const temp = localStorage.getItem('temp');
  productsItems1.dataset.temp = temp;
  productsItems2.dataset.temp = temp;
  productsBtn.dataset.temp = temp;

  document.querySelectorAll('button[data-view]').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      productsItems1.dataset.temp = view;
      productsItems2.dataset.temp = view;
      productsBtn.dataset.temp = view;
      localStorage.setItem('temp', view);
    });
  });
} else {

};