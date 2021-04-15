'use strict';
// 회원 목록 테이블 checkbox 전체 선택

    const checkbox = document.querySelector('#inputA');

    checkbox.addEventListener('click', (e) => {
        let ckAll = document.querySelectorAll('.ckAll');
        if(e.target.checked) { 
            console.log('되나?');
            ckAll.forEach((ckbox) => {
                ckbox.checked = true;
            })
        } else {
            ckAll.forEach((ckbox) => {
                ckbox.checked = false;
            })
        }
        ckAll.forEach((ckbox) => {
            ckbox.addEventListener('click', () => {
                checkbox.checked = false;
            })
        })
        
    })
     

// 모달창 띄우기

    const csModal = document.querySelector('.modalWrapper');
    const registerBtn = document.querySelector('.registerBtn');
    const csCloseBtn =  document.querySelector('.csCloseBtn');

    const status = document.querySelectorAll('.status-un');
    const updateWrap = document.querySelector('.updateWrap');
    const reAndSub = document.querySelector('.reAndSub');
    const csRegister = document.querySelector('.csRegister');
    
    const handleModal = async(test,userId) => { 
        //console.log(userId)
        if(test == 'register') {
            status.forEach(cStatus => {
                cStatus.style.display = "none";
            })
            reAndSub.classList.add('stage');
            updateWrap.classList.remove('stage1');
            csRegister.textContent = "고객 등록";
        } else if(test == "update") {
            const res = await fetch(`/customer/${userId}`)
            const customer = await res.json() //json 뽑을 때
            //console.log(customer)
            status.forEach(cStatus => {
                cStatus.style.display = "block";
            })
            updateWrap.classList.add('stage1');
            reAndSub.classList.remove('stage');
            csRegister.textContent = "고객 정보";
            //수정 모달창에 데이터 뿌리기
            frm.name.value = customer.userNm;
            frm.email.value = customer.userId;
            frm.password.value = customer.password;
            frm.tel.value = customer.tel;
            frm.gender.value = customer.gender;
            frm.bday.value = customer.birth;
            frm.addrDetail.value = customer.address;
            //frm.grade.textContent = customer.gradeCd;
            frm.status.textContent = customer.statusCd;
            //frm.insDt.textContent = customer.insDt;
            //frm.uptDt.textContent = customer.uptDt;
            frm.memo.value = customer.memo;
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

    const csdelete = document.querySelector('.deleteBtn');
    function deleteCheck() {
        if (confirm("정말 삭제하시겠습니까?") == true){//확인
            document.registerForm.submit();
        }else{//취소
            return false;
        }
    }
    csdelete.addEventListener('click', deleteCheck);
