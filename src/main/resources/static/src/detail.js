'use strict';

<<<<<<< HEAD
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
=======
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
>>>>>>> d178f874ccdf84dc59852959edc2d7699fe68c2b
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
<<<<<<< HEAD
=======
const msg = document.querySelector('.msg');

>>>>>>> d178f874ccdf84dc59852959edc2d7699fe68c2b
const add = document.querySelector('.increaseQuantity');
const dec = document.querySelector('.decreaseQuantity');

num.value=1;//default값

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