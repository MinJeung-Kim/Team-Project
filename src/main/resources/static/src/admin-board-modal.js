'use strict'


//등록모달
function onClick() {
    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.write_modal').classList.add('open');
}

//등록모달 필수입력
const subject = document.querySelector('.review_input1');
const content = document.querySelector('.review_input2');
const password = document.querySelector('.review_input4');
const saveBt = document.querySelector('.review-save');

saveBt.addEventListener('click', (e) => {
    if(subject.value == "") {
        e.preventDefault();
        alert("제목을 입력하세요");
    }
    if(content.value == "") {
        e.preventDefault();
        alert("내용을 입력하세요");
    }
    if(password.value == "") {
        e.preventDefault();
        alert("비밀번호를 입력하세요");
    }
})


//종류별 모달 open
async function open(boardNum) {
    const res = await fetch(`/board/${boardNum}`)
    const json = await res.json()
    const status = json.boardStatus
    status == '10' ? rOpen(boardNum) : nOpen(boardNum);
}

//공지모달
async function nOpen(boardNum) {

    //fetch해서 데이터 가져오는 코딩
    const res = await fetch(`/board/${boardNum}`)
    const json = await res.json()

    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.write_modal').classList.add('open');
    
    //데이터에 맞춰 화면 출력
    const subject = document.querySelector('.review_input1');
    const content = document.querySelector('.review_input2');
    const filePath = document.querySelector('.upload-name');
    const passwd = document.querySelector('.review_input4');

    subject.value = json.subject
    content.value = json.content
    filePath.value = json.filePath
    //공지 비밀번호 검사
    const nSaveBt = document.querySelector('.review-save');

    nSaveBt.addEventListener('click', () => {
        passwd.value == json.boardPw ? console.log("저장") : alert("비밀번호를 확인하세요")
    })
}


//리뷰모달
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
function nClose() {
    document.querySelector('.write_modal_back').classList.remove('open');
    document.querySelector('.write_modal').classList.remove('open');
}
function offClick() {
    document.querySelector('.write_modal_back').classList.remove('open');
    document.querySelector('.write_modal').classList.remove('open');
}
document.getElementById('write-review').addEventListener('click',onClick);
document.querySelector('.write_close-button').addEventListener('click',offClick);
document.querySelector('.R-write_close-button').addEventListener('click',rClose);
document.querySelector('.write_close-button').addEventListener('click',nClose);


