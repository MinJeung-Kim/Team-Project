'use strict'

//리뷰 모달 띄우기

async function onClick() {

    //데이터 가져오기
    const res = await fetch('/detail/review');
    const rv = await res.json()
    console.log(rv);
    window.scrollTo(0,0);
    document.querySelector('.reviewAllBack').classList.add('on');
    document.querySelector('.review-all').classList.add('on');

    const subject = document.querySelector('.review_subject');
    const help = document.querySelector('.thums-num');
    const star = document.querySelector('.customer-star');
    const userNm = document.querySelector('.userName');
    const insDt = document.querySelector('.write-date');
    const prdCd = document.querySelector('.product-code');
    const content = document.querySelector('.comment');
    const file = document.querySelector('.review-img');
    const comfortPt = document.querySelector('#comfortable');
    const sizePt = document.querySelector('#size');
    const durablePt = document.querySelector('#durable');
    const widthPt = document.querySelector('#wide');

    
    
    
}
function offClick() {
    window.scrollTo(0,0);
    document.querySelector('.reviewAllBack').classList.remove('on');
    document.querySelector('.review-all').classList.remove('on');
}
document.querySelector('.reviewRead').addEventListener('click',onClick);
document.querySelector('.review_close-button').addEventListener('click',offClick);


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