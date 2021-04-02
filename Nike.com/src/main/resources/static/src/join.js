'use strict'

//정규표현식
const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@%^&*-]).{8,16}$/;
const name = /^[가-힣a-zA-Z]+/;
const phone = /^[0-9]+/;

const join_id = document.getElementById('join_id');
const checkId = document.getElementById('checkId');
const join_pw = document.getElementById('join_password');
const checkPw = document.getElementById('checkPasswd');
const join_repw = document.getElementById('join_repass');
const checkRepw = document.getElementById('checkRepass');
const join_name = document.getElementById('join_name');
const checkName = document.getElementById('checkName');
const join_phone = document.getElementById('join_phone');
const checkPhone = document.getElementById('checkPhone');
const join_button = document.querySelector('.join_button');
const agreeCheck = document.getElementById('agreeCheck');
const pinfoCheck = document.getElementById('pinfoCheck');
    
    //이메일
    join_id.addEventListener('keyup', () => {
        
        let user_id = join_id.value;
        if (user_id==""){
            join_id.style.border = "1px solid red";
            checkId.innerText = "필수 입력 항목입니다.";
        }
        else if (email.test(user_id) == false) {
            join_id.style.border = "1px solid red";
            checkId.innerText = "이메일 형태로 입력해주세요. 해당 계정으로 주문내역이 발송됩니다.";
        }else {
            join_id.style.border = "1px solid #cfcaca";
            checkId.innerText = "";
        }
    })
    //비밀번호
    join_pw.addEventListener('keyup', () => {
        
        let user_password = join_pw.value;
        if (user_password==""){
            join_pw.style.border = "1px solid red";
            checkPw.innerText = "필수 입력 항목입니다.";
        }
        else if (pass.test(user_password) == false) {
            join_pw.style.border = "1px solid red";
            checkPw.innerText = "영문 대 소문+숫자+특수문자 8~16자리(특수문자 괄호(),<>는 사용 불가)";
        }else {
            join_pw.style.border = "1px solid #cfcaca";
            checkPw.innerText = "";
        }
    })
    //비밀번호 재입력
    join_repw.addEventListener('keyup', () => {
        let user_password = join_pw.value;
        let user_repass = join_repw.value;
        if (user_repass==""){
            join_repw.style.border = "1px solid red";
            checkRepw.innerText = "필수 입력 항목입니다.";
        }else if (user_password == user_repass){
            join_repw.style.border = "1px solid #cfcaca";
            checkRepw.innerText = "";
        }else {
            join_repw.style.border = "1px solid red";
            checkRepw.innerText = "입력값이 일치하지 않습니다.";
        }
    })
    //이름
    join_name.addEventListener('keyup', () => {
        
        let user_name=join_name.value;
        if (user_name==""){
            join_name.style.border = "1px solid red";
            checkName.innerText = "필수 입력 항목입니다.";
        }else if(name.test(user_name) == false){
            join_name.style.border = "1px solid red";
            checkName.innerText = "한글과 영문만 입력 가능합니다.";
        }else {
            join_name.style.border = "1px solid #cfcaca";
            checkName.innerText = "";
        }
    })
    //전화번호
    join_phone.addEventListener('keyup', () => {
        
        let user_phone=join_phone.value;
        if (user_phone==""){
            join_phone.style.border = "1px solid red";
            checkPhone.innerText = "필수 입력 항목입니다.";
        }else if(phone.test(user_phone) == false){
            join_phone.style.border = "1px solid red";
            checkPhone.innerText = "숫자만 입력 가능합니다.";
        }else {
            join_phone.style.border = "1px solid #cfcaca";
            checkPhone.innerText = "";
        }
    })

    //필수입력
    join_button.addEventListener('click', () => {
        let user_id = join_id.value;
        let user_password = join_pw.value;
        let user_repass = join_repw.value;
        let user_name = join_name.value;
        let user_phone = join_phone.value;
    
        if(user_id==""){
            join_id.style.border = "1px solid red";
            checkId.innerText = "필수 입력 항목입니다.";
            join_id.focus();
            exit;
            
            }else if (email.test(user_id) == false) {
                join_id.style.border = "1px solid red";
                checkId.innerText = "이메일 형태로 입력해주세요. 해당 계정으로 주문내역이 발송됩니다.";
                join_id.focus();
                exit;
            }else if(user_password==""){
                join_pw.style.border = "1px solid red";
                checkPw.innerText = "필수 입력 항목입니다.";
                join_pw.focus();
                exit;
            }else if (pass.test(user_password) == false) {
                join_pw.style.border = "1px solid red";
                checkPw.innerText = "영문 대 소문+숫자+특수문자 8~16자리(특수문자 괄호(),<>는 사용 불가)";
                join_pw.focus();
                exit;
            }else if(user_repass==""){
                join_repw.style.border = "1px solid red";
                checkRepw.innerText = "필수 입력 항목입니다.";
                join_repw.focus();
                exit;
            }else if(user_password != user_repass){
                join_repw.style.border = "1px solid red";
                checkRepw.innerText = "입력값이 일치하지 않습니다.";
                join_repw.focus();
                exit;
            }else if(user_name==""){
                join_name.style.border = "1px solid red";
                checkName.innerText = "필수 입력 항목입니다.";
                join_name.focus();
                exit;
            }else if(name.test(user_name) == false){
                join_name.style.border = "1px solid red";
                checkName.innerText = "한글과 영문만 입력 가능합니다.";
                join_name.focus();
                exit;
            }else if(user_phone==""){
                join_phone.style.border = "1px solid red";
                checkPhone.innerText = "필수 입력 항목입니다.";
                join_phone.focus();
                exit;
            }else if(phone.test(user_phone) == false){
                join_phone.style.border = "1px solid red";
                checkPhone.innerText = "숫자만 입력 가능합니다.";
                join_phone.focus();
                exit;
            }else if(!(agreeCheck.checked) || !(pinfoCheck.checked)){
                alert('이용 약관에 동의 해주세요.');
                exit;
            }
        
    })