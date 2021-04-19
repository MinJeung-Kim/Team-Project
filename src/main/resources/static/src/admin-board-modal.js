'use strict'

//모달
function onClick() {
    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.write_modal').classList.add('open');
}
function offClick() {
    document.querySelector('.write_modal_back').classList.remove('open');
    document.querySelector('.write_modal').classList.remove('open');
}
document.getElementById('write-review').addEventListener('click',onClick);
document.querySelector('.write_close-button').addEventListener('click',offClick);


