'use strict'

function onClick() {
    document.querySelector('.write_modal_back').style.display = 'block';
    document.querySelector('.write_modal').style.display = 'block';
}
function offClick() {
    document.querySelector('.write_modal_back').style.display = 'none';
    document.querySelector('.write_modal').style.display = 'none';
}
document.getElementById('write-review').addEventListener('click',onClick);
document.querySelector('.write_close-button').addEventListener('click',offClick);


