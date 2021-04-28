'use strict';
 
const prdRegister=document.querySelector('.prd-register');
const prdModalback=document.querySelector('.prd-register-back');
const prdModal=document.querySelector('.prd-register-modal');
const rgText=document.querySelector('.prRegister');
const modalRgBt=document.querySelector('.rgBtn');
const modalUpBt=document.querySelector('.upBtn');

function openClick(test) {
    
    if(test=='register') {
        prdModalback.classList.add('open');
        prdModal.classList.add('open');
        modalRgBt.classList.add('stage');
        modalUpBt.classList.remove('stage1');
    }
    else if (test=='update') {
        prdModalback.classList.add('open');
        prdModal.classList.add('open');
        rgText.textContent="상품 정보 수정"; 
        modalRgBt.classList.remove('stage');
        modalUpBt.classList.add('stage1');      
    }

}
function offClick() {
    prdModalback.classList.remove('open');
    prdModal.classList.remove('open');
}

document.querySelector('.prd-rgs-button').addEventListener('click', event => openClick('register'));
document.querySelector('.prd_close-button').addEventListener('click',offClick);

//가입날짜
const rgDate = document.querySelector('.rgDate');
console.log(rgDate);

const today = new Date();   
const year = today.getFullYear(); // 년도
const month = today.getMonth() + 1;  // 월
const date = today.getDate();  // 날짜

rgDate.value=(year + '-' + month + '-' + date);


