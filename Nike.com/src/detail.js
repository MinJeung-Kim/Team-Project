'use strict';

//따로했을때는 되는데 같이 했을 때 안되는 이유
//하나만 선택되도록 All안하면 
const inputRadio = document.querySelectorAll('.input-radio');

console.log(inputRadio);

for (const size of inputRadio) {
  size.addEventListener('click', function(event) {
    size.style.backgroundColor = 'black';
    size.style.cssText = 'color: white';
  })
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

  // 결과를 표시할 element
const result = document.querySelector('numberUpDown');
console.log(result);

result.addEventListener('click',function count(type) {

  // 현재 화면에 표시된 값
  let number = result.innerText;
  
  // 더하기/빼기
  if(type === 'increaseQuantity') {
    number = parseInt(number) + 1;
  }else if(type === 'decreaseQuantity')  {
    number = parseInt(number) - 1;
  }
  
  // 결과 출력
  result.innerText = number;
});
  