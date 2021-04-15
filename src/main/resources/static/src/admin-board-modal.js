'use strict'

//모달
function onClick() {
    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.write_modal').classList.add('open');
}
async function rOpen(boardNum) {

    //fetch해서 데이터 가져오는 코딩
    const res = await fetch(`/board/${boardNum}`)
    const json = await res.json()

    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.R-write_modal').classList.add('open');
    
    //데이터에 맞춰 화면 출력
    const subject = document.querySelector('.review_subject');
    const help = document.querySelector('.thums-num');
    const star = document.querySelector('.customer-star');
    const userNm = document.querySelector('.user-name');
    const insDt = document.querySelector('.write-date');
    const prdCd = document.querySelector('.product-code');
    const content = document.querySelector('.comment');
    const filePath = document.querySelector('.appending-img');
    const comfortPoint = document.querySelector('#comfortPt');
    const sizePoint = document.querySelector('#sizePt');
    const durablePoint = document.querySelector('#durablePt');
    const widthPoint = document.querySelector('#widthPt');

    subject.textContent = json.subject;
    help.textContent = json.help;
    userNm.textContent = json.userNm;
    insDt.textContent = json.insDt;
    prdCd.textContent = json.prdCd;
    content.textContent = json.content;

    star.innerHTML = ""
    for(let i=1;i<=json.star;i++){
        star.innerHTML += '<i class="fas fa-star"></i>'
    }
    

    comfortPoint.setAttribute('value',json.comfortPoint);
    sizePoint.setAttribute('value',json.sizePoint);
    durablePoint.setAttribute('value',json.durablePoint);
    widthPoint.setAttribute('value',json.widthPoint);


}
function rClose() {
    document.querySelector('.write_modal_back').classList.remove('open');
    document.querySelector('.R-write_modal').classList.remove('open');
}
function offClick() {
    document.querySelector('.write_modal_back').classList.remove('open');
    document.querySelector('.write_modal').classList.remove('open');
}
document.getElementById('write-review').addEventListener('click',onClick);
document.querySelector('.write_close-button').addEventListener('click',offClick);
document.querySelector('.R-write_close-button').addEventListener('click',rClose);



