'use strict';

const gnvNav = document.querySelector('.gnv__nav');
const gnvNavLi = document.querySelector('.gnv__nav >li');

const gnvSub = document.querySelector('.gnv-sub');

gnvNav.addEventListener('mouseenter', function (event) {
  gnvSub.style.display = 'block';
  gnvNavLi.style.cssText = 'border-bottom: 3px solid #111';
});

gnvNav.addEventListener('mouseleave', function (event) {
  gnvSub.style.display = 'none';
  gnvNavLi.style.cssText = '';
});
