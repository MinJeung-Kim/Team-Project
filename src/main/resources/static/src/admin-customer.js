'use strict';
// 회원 목록 테이블 checkbox 전체 선택

    const checkbox = document.querySelector('#inputA');
    const ckAll = document.querySelectorAll('.ckAll');

    checkbox.addEventListener('click', (e) => {
        //console.log(e.target)
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
            frm.userId.readOnly = false;
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
            console.log(customer.insDt)
            frm.insDt.value = customer.insDt;
            frm.uptDt.value = customer.uptDt;
            frm.memo.value = customer.memo;
            reAndSub.classList.remove('stage');
            updateWrap.classList.add('stage1');
            status.forEach(status => {
                status.classList.add('on');
            })
            frm.userId.readOnly = true;
            csRegister.textContent = "고객 수정";
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

    const delFunc = () => {
        let chk = document.getElementsByName('chk');
        let chk_lenth = document.getElementsByName('chk').length;
        //console.log(chk_lenth)
        for(let i = 0; i < chk_lenth; i++) {
            if(chk[i].checked == true) {
                // console.log(chk[i].value)
                let id = chk[i].value;
                console.log(id)
                //fetch
                fetch('/customer/'+id, {
                    method: 'DELETE',
                }).then(res => {
                    if(res.ok) {
                        alert('삭제되었습니다.');
                        location.href="/customer"
                    } else {
                        alert('실패..')
                    }
                })
            }
        }
    }
    //고정
    const delBtn = document.querySelector('.deleteBtn');
    delBtn.addEventListener('click',delFunc);

//수정

    const uptFunc = () => {
        if(confirm('수정하시겠습니까?')) {
            frm.action = "/customer/"+frm.userId.value;
            //console.log(frm.userId.value)
            frm.submit();
        } else {
            return false;
        }
    }

    const updateBtn = document.querySelector('.update');
    updateBtn.addEventListener('click', uptFunc);