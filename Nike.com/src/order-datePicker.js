'use strict';

let orderCalender = document.querySelector('.order-calender');

orderCalender.value = new Date().toISOString().substring(0, 10);
