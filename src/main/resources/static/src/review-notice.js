'use strict'



//모달
async function openNotice(boardNum) {
   
    document.querySelector('.rv-modal-back').classList.add('open');
    document.querySelector('.rv-modal').classList.add('open');

    //데이터 받아오기
    const rs = await fetch(`/detail/notice/${boardNum}`)
    const notice = await rs.json();
   
    //데이터 그리기
    const rv_modal_title = document.querySelector('.rv_modal_title');
    rv_modal_title.innerHTML=`<span class="rv_modal_title_txt">${notice.subject}</span>
    <span class="nt-date">
      <span class="date-tit">업데이트일 : </span>
      <span class="date-txt">${notice.uptDt}</span>
    </span>`
    const rv_body = document.querySelector('.rv_body');
    rv_body.innerHTML = `<p>${notice.content}</p>`
    
}
function closeNotice() {
    document.querySelector('.rv-modal-back').classList.remove('open');
    document.querySelector('.rv-modal').classList.remove('open');
}


//document.querySelector('.notice_list').addEventListener('click',onClick);
document.querySelector('.rv_close-button').addEventListener('click',closeNotice);

//페이징
/*
const pageNum = document.querySelector('#list2');
const data="./notice.html";
const notice = document.querySelector('.notice');

const pageFetch = () => {
    fetch(data)
    .then(response => response.text())
    .then(response => {
        notice.innerHTML = response;
    })
}

pageNum.addEventListener('click', pageFetch);
*/