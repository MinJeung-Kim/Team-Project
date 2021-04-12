'use strict';

//버블링으로 하나씩 가져오기
const sizeOpt= document.querySelectorAll('#sizeOpt span');
const allSize = document.querySelector('#sizeOpt');
console.log(sizeOpt);

allSize.addEventListener('click', e => {
  if (e.target.nodeName === 'SPAN') {
    sizeOpt.forEach((opt) => {
      e.target === opt
        ? opt.classList.add('change-color')
        : opt.classList.remove('change-color');
    });
  }
});

//상품상세 페이지 스크롤 
const upButton = document.querySelector(".scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

upButton.addEventListener('click', (event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


//수량제한
const num = document.querySelector('#numberUpDown');
const msg = document.querySelector('.msg');

const add = document.querySelector('.increaseQuantity');
const dec = document.querySelector('.decreaseQuantity');

//default값
num.value=1;

add.addEventListener('click', () => {
  
  if (num.value < 10) {
    num.value = `${parseInt(num.value) + 1}`;
  }
  else if(num.value == 10) {
    msg.innerText = `10개 까지 구매가능 합니다.`;
  }
});

dec.addEventListener('click', () => {
  if (num.value > 0) num.value = `${parseInt(num.value) - 1}`;
  if(num.value==0) {
    num.value=1;
    msg.innerText = ' ';
  }
});
