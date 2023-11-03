document.addEventListener('DOMContentLoaded', () => {

  // FILTER-MENU-ACCARDION
  $(document).ready(function () {
    $('.filter-menu__item-head').click(function (event) {
      $(this).toggleClass('active').next().slideToggle(200);
    });
  });

  // RANGE-PRICE
  var rangeWidth = document.getElementById('range-width');
  var rangeHeight = document.getElementById('range-height');
  var rangeDepth = document.getElementById('range-depth');
  var rangePrice = document.getElementById('range-price');

  if (rangeWidth) {
    noUiSlider.create(rangeWidth, {
      start: [130, 360],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 400
      }
    });

    const range1 = document.getElementById('range-width-1');
    const range2 = document.getElementById('range-width-2');
    const ranges = [range1, range2];

    rangeWidth.noUiSlider.on('update', function (values, handle) {
      ranges[handle].value = Math.round(values[handle]);
    });

    const setRangeWidth = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      rangeWidth.noUiSlider.set(arr);
    };

    ranges.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeWidth(index, e.currentTarget.value);
      });
    });
  }

  if (rangeHeight) {
    noUiSlider.create(rangeHeight, {
      start: [50, 170],
      connect: true,
      step: 1,
      range: {
        'min': 50,
        'max': 170
      }
    });

    const range1 = document.getElementById('range-height-1');
    const range2 = document.getElementById('range-height-2');
    const ranges = [range1, range2];

    rangeHeight.noUiSlider.on('update', function (values, handle) {
      ranges[handle].value = Math.round(values[handle]);
    });

    const setrangeHeight = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      rangeHeight.noUiSlider.set(arr);
    };

    ranges.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setrangeHeight(index, e.currentTarget.value);
      });
    });
  }

  if (rangeDepth) {
    noUiSlider.create(rangeDepth, {
      start: [13, 360],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 400
      }
    });

    const range1 = document.getElementById('range-depth-1');
    const range2 = document.getElementById('range-depth-2');
    const ranges = [range1, range2];

    rangeDepth.noUiSlider.on('update', function (values, handle) {
      ranges[handle].value = Math.round(values[handle]);
    });

    const setRangeDepth = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      rangeDepth.noUiSlider.set(arr);
    };

    ranges.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeDepth(index, e.currentTarget.value);
      });
    });
  }

  if (rangePrice) {
    noUiSlider.create(rangePrice, {
      start: [150000, 550000],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 550000
      }
    });

    const range1 = document.getElementById('range-price-1');
    const range2 = document.getElementById('range-price-2');
    const ranges = [range1, range2];

    rangePrice.noUiSlider.on('update', function (values, handle) {
      ranges[handle].value = Math.round(values[handle]);
    });

    const setRangePrice = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      rangePrice.noUiSlider.set(arr);
    };

    ranges.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangePrice(index, e.currentTarget.value);
      });
    });
  }

});