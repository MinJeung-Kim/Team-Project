'use strict'

const st1 = document.getElementById("star1");
const st2 = document.getElementById("star2");
const st3 = document.getElementById("star3");
const st4 = document.getElementById("star4");
const st5 = document.getElementById("star5");
const star = document.querySelector('.product-star');

//클릭시 색 바꾸기

const $starWrap = document.querySelector('.product-star')
const $stars = document.querySelectorAll('.fas.fa-star')

$starWrap.addEventListener('click', (e) => {
  
    let flag = true;
    if(e.target.nodeName == 'I'){
        $stars.forEach((star) => {
            flag ? star.classList.add('click') :
            star.classList.remove('click')
            if(e.target==star) flag = false;
        })
    }
})

