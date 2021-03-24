'use strict';

const gnvSearch = document.querySelector('.gnv-search');
const gnvSearchInput = document.querySelector('.search-form')
const searchModal = document.querySelector('big-search');
//input창 너비 넓히기

console.log(searchModal)


function onClick() {
    searchModal.style.display = 'block';
    //gnvSearchInputBack.style.display = 'block';
}
function offClick() {
    searchModal.style.display = 'none';
    //gnvSearchInputBack.style.display = 'none';
}
searchModal.addEventListener('click',onClick);
document.querySelector('.search-close').addEventListener('click',offClick);

  