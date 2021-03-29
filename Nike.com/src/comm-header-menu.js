'use strict';

// header 서브메뉴 열고 닫기
const gnvNavLi = document.querySelectorAll('.gnv__nav > li');
const gnvSub = document.querySelectorAll('.gnv-sub');

const releases = document.querySelector('.releases');
const men = document.querySelector('.men');

gnvNavLi.forEach(function (userItem) {
  userItem.addEventListener('mouseenter', mouseEntEvent);
});

gnvSub.forEach(function (userItem) {
  userItem.addEventListener('mouseleave', mouseLeaveEvent);
});

function mouseEntEvent(event) {
  console.log(event.target.textContent);
  switch (event.target.textContent) {
    case 'New Releases':
      releases.className = 'on';
      break;
    case 'Men':
      men.className = 'on';
      break;
  }
  // gnvSub.style.display = 'block';
  // gnvNavLi.style.cssText = 'border-bottom: 3px solid #111';
}

function mouseLeaveEvent(event) {
  if (event.target.className === 'on') event.target.className = 'off';
  // gnvSub.style.display = 'none';
  // gnvNavLi.style.cssText = '';
}
