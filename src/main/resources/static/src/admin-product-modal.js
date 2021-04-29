'use strict';
 
const prdRegister=document.querySelector('.prd-register');
const prdModalback=document.querySelector('.prd-register-back');
const prdModal=document.querySelector('.prd-register-modal');
const rgBt=document.querySelector('.prd-rgs-button');
const rgText=document.querySelector('.prRegister');
const modalRgBt=document.querySelector('.rgBtn');
const modalUpBt=document.querySelector('.upBtn'); //div
const uptBt=document.querySelector('.prdModal-update'); //bt

const form=document.getElementById('prd_form');

const rgF = function(e) {
    form.submit();
}
form.addEventListener('submit',rgF);
uptBt.addEventListener('submit',rgF);

async function openClick(test,prdCd) {
    
    if(test=='register') {
        prdModalback.classList.add('open');
        prdModal.classList.add('open');
        modalRgBt.classList.add('stage');
        modalUpBt.classList.remove('stage1');
    }
    else if (test=='update') {
        const res = await fetch('/admin-productMng/${prdCd}');
        const adProduct = await res.json();
        
        form.prdCd.value=adProduct.prdCd;
        //console.log(adProduct.prdCd);
        form.prdNm.value=adProduct.prdNm;
        form.prdPr.value=adProduct.prdPr;
        form.insDt.value=adProduct.insDt;

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

rgBt.addEventListener('click', event => openClick('register'));
document.querySelector('.prd_close-button').addEventListener('click',offClick);

//가입날짜
const rgDate = document.querySelector('.rgDate');
console.log(rgDate);

// const today = new Date();   
// const year = today.getFullYear(); // 년도
// const month = today.getMonth() + 1;  // 월
// const date = today.getDate();  // 날짜

// rgDate.value=(year + '-' + month + '-' + date);

const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        const getToday = year + "-" + month + "-" + day;
        rgDate.value=getToday;
    }
rgBt.addEventListener('click',getDate);