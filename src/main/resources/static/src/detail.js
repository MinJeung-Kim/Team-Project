'use strict';

//버블링으로 하나씩 가져오기
const sizeOpt= document.querySelector('#sizeOpt');
console.log(sizeOpt);

sizeOpt.addEventListener('click', (e) => {
  alert(e.target.innerText);
  e.target.style.cssText = 'color: white'
  e.target.style.backgroundColor = 'black'
});


//scroll
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


//quantity
const num = document.querySelector('#numberUpDown');

console.log(num);

const add = document.querySelector('.increaseQuantity');
const dec = document.querySelector('.decreaseQuantity');

//default값
num.value=1;

add.addEventListener('click', () => {
  num.value = `${parseInt(num.value) + 1}`;
  if(num.value>=10) {
    alert("10개이상은 구매하실 수 없습니다!");
    num.value--;
  }
});

dec.addEventListener('click', () => {
  if (num.value > 0) num.value = `${parseInt(num.value) - 1}`;
  if(num.value==0) {
    alert("0개는 구매하실 수 없습니다!");
    num.value=1;
  }
});
