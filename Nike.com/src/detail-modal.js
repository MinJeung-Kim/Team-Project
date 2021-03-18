'use strict';
    

        const registerBtn = document.querySelector('.registerBtn');
        const csCloseBtn = document.querySelector('.csCloseBtn');
        const csModal = document.querySelector('.modalWrapper');

        registerBtn.addEventListener('click', openModal)
        function openModal() {
            csModal.style.display = "flex";
        };
        csCloseBtn.addEventListener('click', function() {
            csModal.style.display = "none";
        });

        

        

    