'use strict';

//size option
//하나만 선택되도록 >버블링으로 변경
const inputRadio = document.querySelectorAll('.input-radio');

console.log(inputRadio);

for (const size of inputRadio) {
  if(size.length=1) {
  size.addEventListener('click', function(event) {
    size.style.backgroundColor = 'black'
    size.style.color = 'white'
  })
  }
}



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
const add = document.querySelector('.increaseQuantity');
const dec = document.querySelector('.decreaseQuantity');

num.value=1;//default값

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


//review
const dtReview = document.querySelector('#dt-review');
const rvBox = document.querySelector('.review-box'); //보여지는 내용 받아오기
const arrow = document.querySelector(".fa-chevron-down");

//화살표 변경
arrow.addEventListener("click", (e) => {
  ["fa-chevron-down", "fa-chevron-up"].forEach(
    c => e.target.classList.toggle(c));
});

// div 클릭 시 내용보여지는 것
dtReview.addEventListener('click', () => {
  rvBox.classList.toggle('act');
})