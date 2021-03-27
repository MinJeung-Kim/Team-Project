'use strict';

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});

var nonLinearStepSliderValueElement = document.getElementById(
  'slider-non-linear-step-value'
);

slider.noUiSlider.on('update', function (values) {
  nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});
