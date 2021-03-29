'use strict';

const gnvNavLi = document.querySelectorAll('.gnv__nav > li');
const gnvListLi = document.querySelectorAll('.locator-black');

const gnvSub = document.querySelector('.gnv-sub');

gnvNavLi.forEach(function (userItem) {
  userItem.addEventListener('mouseenter', mouseEntEvent);
});

gnvSub.addEventListener('mouseleave', mouseLeaveEvent);

function mouseEntEvent(event) {
  console.log(event.target.textContent);
  gnvSub.style.display = 'block';
  gnvNavLi.style.cssText = 'border-bottom: 3px solid #111';
}

function mouseLeaveEvent(event) {
  gnvSub.style.display = 'none';
  gnvNavLi.style.cssText = '';
}
