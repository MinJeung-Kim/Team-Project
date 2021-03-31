'use strict';

//따로했을때는 되는데 같이 했을 때 안되는 이유
//하나만 선택되도록 All안하면 
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
