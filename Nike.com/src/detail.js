'use strict';

//따로했을때는 되는데 같이 했을 때 안되는 이유
//하나만 선택되도록 All안하면 
const inputRadio = document.querySelectorAll('.input-radio');

console.log(inputRadio);

for (const size of inputRadio) {
  size.addEventListener('click', function(event) {
    size.style.backgroundColor = '#FFFFFF';
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