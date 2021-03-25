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

//가입날짜, 수정날짜

    const joinDate = document.querySelector('.joinDate');
    const updateDate = document.querySelector('.updateDate');
    const reset = document.querySelector('.reset');
    const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        const getToday = year + "-" + month + "-" + day;
        updateDate.value=getToday;
        joinDate.value=getToday;
    }
    registerBtnWrap.addEventListener('click', getDate);
    reset.addEventListener('click', getDate);

