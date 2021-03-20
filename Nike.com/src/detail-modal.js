'use strict';

    const csModal = document.querySelector('.modalWrapper');
    const registerBtnWrap = document.querySelector('.registerBtnWrap');
    const csCloseBtn =  document.querySelector('.csCloseBtn');

    const handleModal = function() {
        csModal.classList.toggle('unstaged');
        document.body.classList.toggle('back');
    } 
    registerBtnWrap.addEventListener('click', handleModal);
    csCloseBtn.addEventListener('click', handleModal);


