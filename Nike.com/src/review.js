'use stict'

// 최신,도움순 클릭 이벤트

const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');

const filter2Clicked = () => {
    filter1.classList.remove('clicked');
    filter2.classList.add('clicked');
}
const filter1Clicked = () => {
    filter2.classList.remove('clicked');
    filter1.classList.add('clicked');
}
filter2.addEventListener('click',filter2Clicked);
filter1.addEventListener('click',filter1Clicked);


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