'use strict';

const gnvSearch = document.querySelector('.gnv-search');
const gnvSearchInput = document.querySelector('.search-input');

const searchModal = document.querySelector('big-search');
//input창 너비 넓히기


function onClick() {

    console.log(gnvSearchInput);
    console.log(searchModal);

}
function offClick() {

    searchModal.style.display = 'none';
    
}
gnvSearchInput.addEventListener('click',onClick);
document.querySelector('.search-close').addEventListener('click',offClick);

  