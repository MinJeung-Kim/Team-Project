'use strict'

console.log(adBoard)
//모달
function onClick() {
    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.write_modal').classList.add('open');
}
function rOpen(row) {
    console.log(row)
    document.querySelector('.write_modal_back').classList.add('open');
    document.querySelector('.R-write_modal').classList.add('open');
    //fetch해서 데이터 가져오는 코딩
    
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



