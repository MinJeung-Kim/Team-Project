'use strict';

// 모달창 띄우기

    const csModal = document.querySelector('.modalWrapper');
    const registerBtnWrap = document.querySelector('.registerBtnWrap');
    const csCloseBtn =  document.querySelector('.csCloseBtn');

    const handleModal = function() {
        csModal.classList.toggle('unstaged');
        document.body.classList.toggle('back');
    } 
    registerBtnWrap.addEventListener('click', handleModal);
    csCloseBtn.addEventListener('click', handleModal);

// 우편번호 검색
    
    const postBtn = document.querySelector('.postBtn');
    const post = document.querySelector('.post');
    const addrDetail = document.querySelector('.addrDetail');
    const openZipSearch = () => {
        new daum.Postcode({
            oncomplete: function(data) {
                post.value = data.zonecode;
                addrDetail.value = data.address;
            }
        }).open();
    }

    postBtn.addEventListener("click", openZipSearch);
