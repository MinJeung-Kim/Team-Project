'use strict'

function onClick() {
    document.querySelector('.modal_back').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
    $('body').css("overflow", "hidden");
}
function offClick() {
    document.querySelector('.modal_back').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
    $('body').css("overflow", "scroll");
}
document.querySelector('.header_login').addEventListener('click',onClick);
document.querySelector('.close-button').addEventListener('click',offClick);


