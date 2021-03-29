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
  switch (event.target.textContent) {
    case 'New Releases':
      releases.classList.add('on');
      break;
    case 'Men':
      men.classList.add('on');
      break;
  }
  // gnvSub.style.display = 'block';
  // gnvNavLi.style.cssText = 'border-bottom: 3px solid #111';
}

function mouseLeaveEvent() {
  console.log(releases.className);
  releases.classList.remove('on');
  men.classList.remove('on');
  // gnvSub.style.display = 'none';
  // gnvNavLi.style.cssText = '';
}
