'use strict';

//admin order management
const dateEnd = document.querySelector('.date-end');
const dateStart = document.querySelector('.date-start');

let date = new Date();
let beforeMonth = new Date(Date.parse(date) - 30 * 1000 * 60 * 60 * 22); //30일전

dateStart.value = beforeMonth.toISOString().substring(0, 10);
dateEnd.value = date.toISOString().substring(0, 10); // today
