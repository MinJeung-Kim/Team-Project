'use strict';
// 회원 목록 테이블 checkbox 전체 선택

    const checkbox = document.querySelector('#inputA');
    const ckAll = document.querySelectorAll('.ckAll');

    checkbox.addEventListener('click', (e) => {
        
        if(e.target.checked) { 
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
            status.forEach(status => {
                status.classList.remove('on');
            })
            csRegister.textContent = "고객 등록";
            resetContents();
        } else if(test == "update") {
            const res = await fetch(`/customer/${userId}`)
            const customer = await res.json() //json 뽑을 때
            frm.userNm.value = customer.userNm;
            frm.userId.value = customer.userId;
            frm.password.value = customer.password;
            frm.tel.value = customer.tel;
            for(let i = 0; i < frm.gender.options.length; i++){
                if(frm.gender.options[i].value == customer.gender){
                    frm.gender.options[i].selected = true;
                }
            }
            frm.birth.value = customer.birth;
            frm.address.value = customer.address;
            // frm.grade.options.forEach((grade,i) => {
            //     if(grade == customer.grade) grade.selected = true;
            // })
            //frm.grade.setAttribute('value',customer.gradeCd);
            // frm.status.value = customer.statusCd;
            console.log(customer.insDt)
            frm.insDt.value = customer.insDt;
            frm.uptDt.value = customer.uptDt;
            frm.memo.value = customer.memo;
            reAndSub.classList.remove('stage');
            updateWrap.classList.add('stage1');
            status.forEach(status => {
                status.classList.add('on');
            })
        }
        csModal.classList.toggle('unstaged');
        document.body.classList.toggle('back');
        
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
        updateDate.value=getToday;
        joinDate.value=getToday;
    }
    registerBtn.addEventListener('click',getDate);

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

//삭제

const getIdFunc = () => {
    ckAll.forEach(ck => {
        ck.addEventListener('click',(e) => {
            let userId = e.target.value;
            console.log(userId)
        })
    })
}
    const form = document.registerForm;
    const csdelete = document.querySelector('.deleteBtn');
    function deleteCheck(data) {
        if (confirm("정말 삭제하시겠습니까?") == true){//확인
            console.log(`data= ${data}`)
            form.action="/delete?userId="+userId;
            form.submit();
        }else{//취소
            return false;
        }
    }
    csdelete.addEventListener('click', deleteCheck);
