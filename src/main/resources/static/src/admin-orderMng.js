'use strict';
import { getDate } from './comm-date.js';

// 날짜 자동 세팅
const dateEnd = document.querySelector('.date-end');
const dateStart = document.querySelector('.date-start');

const today = document.querySelector('.day-today');
const threeDay = document.querySelector('.day-three');
const month = document.querySelector('.day-month');

let date = new Date();
let beforeMonth = getDate(-30);
let beforeThreeDay = getDate(-7);

dateStart.value = beforeMonth.toISOString().substring(0, 10);
dateEnd.value = date.toISOString().substring(0, 10); // today

today.addEventListener('click', function (event) {
  dateStart.value = date.toISOString().substring(0, 10);
});

threeDay.addEventListener('click', function (event) {
  dateStart.value = beforeThreeDay.toISOString().substring(0, 10);
});

month.addEventListener('click', function (event) {
  dateStart.value = beforeMonth.toISOString().substring(0, 10);
});

//금액 설정 슬라이더
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
