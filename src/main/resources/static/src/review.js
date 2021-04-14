'use strict'

console.log(review);
// 최신,도움순 클릭 이벤트

const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const chk_lb = document.querySelector('.review_filter');
const reviewsort = document.querySelector('.review_sort');

reviewsort.addEventListener('click' , (event) => {
    if(event.target.className=='review_filter'){
    filter1.classList.toggle('clicked');
    filter2.classList.toggle('clicked');
    }
})

//더보기

const button = document.getElementById('load-more');
const url="./review-more.html";
const list = document.querySelector('.review_read');

const readMore = () => {
    fetch(url)
    .then(response => response.text())
    .then(response => {
        list.innerHTML +=response;
    })
}

button.addEventListener('click', readMore);

//엄지 클릭이벤트

//const thumbs = document.querySelector('.far');
const review_read = document.querySelector('.review_read');

review_read.addEventListener('click', (event) => {
    if(event.target.classList.contains('fa-thumbs-up')){
        event.target.classList.toggle('fas');
    }
})