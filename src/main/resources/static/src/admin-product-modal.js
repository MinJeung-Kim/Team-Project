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

//가입날짜
const rgDate = document.querySelector('.rgDate');
console.log(rgDate);

const getdate = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = ("0" + (1 + d.getMonth())).slice(-2);
    const dy = ("0" + d.getDate()).slice(-2);

    const gettoday = y + "-" + m + "-" + d;
    console.log(gettoday);
    rgDate.innerHTML=gettoday;
}

