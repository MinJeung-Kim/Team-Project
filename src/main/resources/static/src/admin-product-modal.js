'use strict';
 
const prdRegister=document.querySelector('.prd-register');
const prdModalback=document.querySelector('.prd-register-back');
const prdModal=document.querySelector('.prd-register-modal');
console.log(prdRegister);

function onClick() {
    prdModalback.classList.add('open');
    prdModal.classList.add('open');
}
function offClick() {
    prdModalback.classList.remove('open');
    prdModal.classList.remove('open');
}

document.querySelector('.prd-rgs-button').addEventListener('click',onClick);
document.querySelector('.prd_close-button').addEventListener('click',offClick);