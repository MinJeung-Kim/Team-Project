'use strict';

var pipsSlider = document.getElementById('slider');

noUiSlider.create(pipsSlider, {
  start: [0, 90],
  step: 30,
  range: {
    min: 0,
    max: 210,
  },
  pips: {
    mode: 'steps',
    density: 3,
    format: wNumb({
      decimals: 2,
      prefix: '$',
    }),
  },
});

var nonLinearStepSliderValueElement = document.getElementById('slider-value');

pipsSlider.noUiSlider.on('update', function (values) {
  nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});
