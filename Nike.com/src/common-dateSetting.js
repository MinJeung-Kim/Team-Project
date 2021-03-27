'use strict';

//admin order management
const dateEnd = document.querySelector('.date-end');
const dateStart = document.querySelector('.date-start');

const today = document.querySelector('.day-today');
const threeDay = document.querySelector('.day-three');
const month = document.querySelector('.day-month');

let date = new Date();
let beforeMonth = new Date(Date.parse(date) - 30 * 1000 * 60 * 60 * 24); //한 달전
let beforeThreeDay = new Date(Date.parse(date) - 3 * 1000 * 60 * 60 * 24); //3일전

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
