'use strict';

// header 서브메뉴 열고 닫기
const gnvNav = document.querySelector('.gnv__nav');
const gnvSubs = document.querySelectorAll('.gnv-sub');
const gnvNavLi = document.querySelectorAll('.gnv__nav li >a');

gnvNav.addEventListener('mouseover', mouseOverEvent);

gnvSubs.forEach(function (userItem) {
  userItem.addEventListener('mouseleave', mouseLeaveEvent);
});

function mouseOverEvent(event) {
  gnvNavLi.forEach((li, index) => {
    if (li === event.target || li.parentNode === event.target) {
      console.log(li.childNodes);
      gnvSubs[index].classList.add('on');
    } else {
      gnvSubs[index].classList.remove('on');
    }
  });
}

function mouseLeaveEvent() {
  gnvSubs.forEach((gnvSub) => {
    gnvSub.classList.remove('on');
  });
}
