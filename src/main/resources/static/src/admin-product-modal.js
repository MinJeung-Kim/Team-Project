'use strict';
 
const prdRegister=document.querySelector('.prd-register');
const prdModalback=document.querySelector('.prd-register-back');
const prdModal=document.querySelector('.prd-register-modal');
const rgBt=document.querySelector('.prd-register'); //grid.js 테이블 밑 등록 버튼
const rgText=document.querySelector('.prRegister'); //모달창 상단 텍스트 변경 위한
const modalRgBt=document.querySelector('.rgBtn'); //모달창 안에 있는 등록버튼 
const modalUpBt=document.querySelector('.upBtn'); //div 영역
const uptBt=document.querySelector('.prdModal-update'); //bt 

const form=document.getElementById('prd_form');

const rgF = function(e) {
    form.submit();
}
form.addEventListener('submit',rgF);

//수정
// const uptFunc = () => {
//     if(confirm('수정하시겠습니까?')) {
//         form.action = "/admin-productMng/"+form.prdCd.value;
//         form.submit();
//     } else {
//         return false;
//     }

// uptBt.addEventListener('submit',uptFunc);



async function openClick(test,prdCd) {
    
    if(test=='register') {
        prdModalback.classList.add('open');
        prdModal.classList.add('open');
        modalRgBt.classList.add('stage');
        modalUpBt.classList.remove('stage1');

    }
    else if (test=='update') {
        const res = await fetch(`/admin-productMng/${prdCd}`);
        const adProduct = await res.json();
        
        form.prdCd.value=adProduct.prdCd;
        console.log(adProduct.prdCd);
        form.prdNm.value=adProduct.prdNm;
        console.log(adProduct.prdCt);
        for(let i = 0; i < form.prdCt.options.length; i++){
            if(form.prdCt.options[i].value == adProduct.prdCt){
                form.prdCt.options[i].selected = true;
                
            }
        }
        form.prdSub.value=adProduct.prdSub;
        for(let i = 0; i < form.prdTp.options.length; i++){
            if(form.prdTp.options[i].value == adProduct.prdTp){
                form.prdTp.options[i].selected = true;
            }
        }
        form.prdSm.value=adProduct.prdSm;
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

const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        const getToday = year + "-" + month + "-" + day;
        rgDate.value=getToday;
    }
rgBt.addEventListener('click',getDate);