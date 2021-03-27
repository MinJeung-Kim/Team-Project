'use strict';

let orderEnd = document.querySelector('.order-end');
let orderStart = document.querySelector('.order-start');

let date = new Date();
let beforeMonth = new Date(Date.parse(date) - 30 * 1000 * 60 * 60 * 22); //30일전

orderStart.value = beforeMonth.toISOString().substring(0, 10);
orderEnd.value = date.toISOString().substring(0, 10); // today
