'use stict'

// 최신,도움순 클릭 이벤트

 const filter1 = document.getElementById('filter1');
 const filter2 = document.getElementById('filter2');
// const reviewsort = document.querySelector('.review_sort');


// const filter2Clicked = () => {
//     filter1.classList.remove('clicked');
//     filter2.classList.add('clicked');
// }
// const filter1Clicked = () => {
//     filter2.classList.remove('clicked');
//     filter1.classList.add('clicked');
// }
// filter2.addEventListener('click',filter2Clicked);
// filter1.addEventListener('click',filter1Clicked);

//체크박스 선택시 라벨 디자인 변경

//const chk_input = document.querySelector('.chk_input');
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