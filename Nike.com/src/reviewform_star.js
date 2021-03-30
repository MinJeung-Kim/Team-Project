'use strict'

const st1 = document.getElementById("star1");
const st2 = document.getElementById("star2");
const st3 = document.getElementById("star3");
const st4 = document.getElementById("star4");
const st5 = document.getElementById("star5");
const star = document.querySelector('.product-star');

//클릭시 색 바꾸기

// const $starWrap = document.querySelector('.product-star')
// const $stars = document.querySelectorAll('.fas.fa-star')

// $starWrap.addEventListener('click', (e) => {
//   console.log(e)
//   console.log(e.target)
//   console.log(e.target.className)

//    $stars.forEach((star) => {
//     console.log(star.id)
//    })
// })

st5.addEventListener('click', () => {
    st1.style.color = 'black';
    st2.style.color = 'black';
    st3.style.color = 'black';
    st4.style.color = 'black';
    st5.style.color = 'black';
    
})
st4.addEventListener('click', () => {
    st1.style.color = 'black';
    st2.style.color = 'black';
    st3.style.color = 'black';
    st4.style.color = 'black';
    st5.style.color = 'gray';
})
st3.addEventListener('click', () => {
    st1.style.color = 'black';
    st2.style.color = 'black';
    st3.style.color = 'black';
    st4.style.color = 'gray';
    st5.style.color = 'gray';
})
st2.addEventListener('click', () => {
    st1.style.color = 'black';
    st2.style.color = 'black';
    st3.style.color = 'gray';
    st4.style.color = 'gray';
    st5.style.color = 'gray';
})
st1.addEventListener('click', () => {
    st1.style.color = 'black';
    st2.style.color = 'gray';
    st3.style.color = 'gray';
    st4.style.color = 'gray';
    st5.style.color = 'gray';
})