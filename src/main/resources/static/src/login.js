'use strict'

const list = JSON.parse(login).map(({userId,password})=>([userId,password]))
console.log(list)



const bt_log = document.querySelector('.log-button');
const chk_all = document.getElementById('chk_all');
const chk_email = document.getElementById('chk_email');
const chk_pw = document.getElementById('chk_pw');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

//필수입력, 아이디/비밀번호 체크
bt_log.addEventListener('click', () => {
    if(input1.value !== "" && input2.value !==""){
        list.forEach(element => {
        if(input1.value == element[0]){
            (input2.value == element[1]) ? console.log("통과") : (chk_all.innerText = '아이디와 비밀번호를 확인하세요');
            
        }else {
            chk_all.innerText = '아이디와 비밀번호를 확인하세요'
        }
    }); 
    }else{
    if(input1.value==""){//이메일 필수입력
        input1.style.border = '1px solid red';
        chk_email.innerText = '필수 입력 항목입니다.';
        input1.focus();
        if(input1.addEventListener('keyup', () => {
            input1.style.border = '1px solid #e5e5e5';
            chk_email.innerText = '';
        }))
        exit;
    }else if(input2.value==""){//비밀번호 필수입력
        input2.style.border = '1px solid red';
        chk_pw.innerText = '필수 입력 항목입니다.';
        input2.focus();
        if(input2.addEventListener('keyup', () => {
            input2.style.border = '1px solid #e5e5e5';
            chk_pw.innerText = '';
        }))
        exit;
    }
}
})


