'use strict';

// 모달창 띄우기

    const csModal = document.querySelector('.modalWrapper');
    const registerBtn = document.querySelector('.registerBtn');
    const csCloseBtn =  document.querySelector('.csCloseBtn');

    const status = document.querySelectorAll('.status-un');
    const updateWrap = document.querySelector('.updateWrap');
    const reAndSub = document.querySelector('.reAndSub');
    const csRegister = document.querySelector('.csRegister');

    const handleModal = (test) => { 
        if(test == 'register') {
            status.forEach(cStatus => {
                cStatus.style.display = "none";
            })

            reAndSub.classList.add('stage');
            updateWrap.classList.remove('stage1');
            csRegister.textContent = "고객 등록";
        } else if(test == "update") {
            status.forEach(cStatus => {
                cStatus.style.display = "block";
            })
            updateWrap.classList.add('stage1');
            reAndSub.classList.remove('stage');
            csRegister.textContent = "고객 정보";
        }
        csModal.classList.toggle('unstaged');
        document.body.classList.toggle('back');
        getDate();
    } 
    registerBtn.addEventListener('click', event => handleModal('register'));
    csCloseBtn.addEventListener('click', event => handleModal('register'));

//가입날짜, 수정날짜

    const joinDate = document.querySelector('.joinDate');
    const updateDate = document.querySelector('.updateDate');
    const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        const getToday = year + "-" + month + "-" + day;
        updateDate.innerHTML=getToday;
        joinDate.innerHTML=getToday;
    }

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

//등록Form 부분 초기화

    const reset = document.querySelector('.reset');
    const writes = document.querySelectorAll('.write');
    const resetContents = () => {  
        writes.forEach(formData => {
            if(formData.nodeName == "SELECT") {
                formData.value = formData.firstElementChild.value;
            } else {
                formData.value="";
            }
        })
    }
    csCloseBtn.addEventListener('click', resetContents);    

//등록

    // function regCheck() {
    //     if(confirm("등록하시겠습니까?") == false) return false;
    // }

//수정
    const update = document.querySelector('.update');
    function updateCheck() {
        if (confirm("정말 수정하시겠습니까?") == true){//확인
            document.registerForm.submit();
        }else{//취소
            return false;
        }
    }
    update.addEventListener('click', updateCheck);

//삭제

    const csdelete = document.querySelector('.delete');
    function deleteCheck() {
        if (confirm("정말 삭제하시겠습니까?") == true){//확인
            document.registerForm.submit();
        }else{//취소
            return false;
        }
    }
    csdelete.addEventListener('click', deleteCheck);