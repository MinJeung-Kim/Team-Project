'use strict'

//모달
function onClick(event) {
    if(event.target.className=='list-item-link'){
    document.querySelector('.rv-modal-back').style.display = 'block';
    document.querySelector('.rv-modal').style.display = 'block';
    }
}
function offClick() {
    document.querySelector('.rv-modal-back').style.display = 'none';
    document.querySelector('.rv-modal').style.display = 'none';
}
document.querySelector('.notice_list').addEventListener('click',onClick);
document.querySelector('.rv_close-button').addEventListener('click',offClick);

