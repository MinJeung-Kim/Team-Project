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

        // const csModal = document.querySelector('.modalWrapper');
        // const openModal = function() {
        //     csModal.style.display = "flex";
        //     document.body.style.overflow = "hidden";
        // } 
        // const closeModal = function() {
        //     csModal.style.display = "none";
        //     document.body.style.overflow = "scroll";
        // }

        // document.querySelector('.registerBtn').addEventListener('click', openModal);
        // document.querySelector('.csCloseBtn').addEventListener('click', closeModal);

