'use strict';

const gnvSearch = document.querySelector('.gnv-search');
const gnvSearchInput = document.querySelector('.search-form')

//검색상단 모달
const searchWrap = document.querySelector('.search-wrap');
const searchBack = document.querySelector('.search-back');
const searchModal = document.querySelector('.search-modal');

console.log(searchWrap);
console.log(searchModal);

//모달
function onClick(event) {
    searchBack.classList.add('open');
    searchModal.classList.add('open');
}
function offClick() {
    searchBack.classList.remove('open');
    searchModal.classList.remove('open');
}
gnvSearchInput.addEventListener('click',onClick);
document.querySelector('.search-close').addEventListener('click',offClick);