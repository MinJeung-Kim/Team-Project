'use strict'

//모달
function onClick(event) {
    if(event.target.className=='list-item-link'){
    document.querySelector('.rv-modal-back').classList.add('open');
    document.querySelector('.rv-modal').classList.add('open');
    }
}
function offClick() {
    document.querySelector('.rv-modal-back').classList.remove('open');
    document.querySelector('.rv-modal').classList.remove('open');
}
document.querySelector('.notice_list').addEventListener('click',onClick);
document.querySelector('.rv_close-button').addEventListener('click',offClick);

//페이징
/*
const pageNum = document.querySelector('#list2');
const data="./notice.html";
const notice = document.querySelector('.notice');

const pageFetch = () => {
    fetch(data)
    .then(response => response.text())
    .then(response => {
        notice.innerHTML = response;
    })
}

pageNum.addEventListener('click', pageFetch);
*/