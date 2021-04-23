'use strict'

const bt_log = document.querySelector('.log-button');
const chk_all = document.getElementById('chk_all');
const chk_email = document.getElementById('chk_email');
const chk_pw = document.getElementById('chk_pw');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const logTxt = document.querySelector('.header_login');


//로그인
bt_log.addEventListener('click', async(e) => {

    
    if(input1.value==""){//이메일 필수입력
        e.preventDefault();
        input1.style.border = '1px solid red';
        chk_email.innerText = '필수 입력 항목입니다.';
        input1.focus();
        if(input1.addEventListener('keyup', () => {
            input1.style.border = '1px solid #e5e5e5';
            chk_email.innerText = '';
        }))
        exit;
    }else if(input2.value==""){//비밀번호 필수입력
        e.preventDefault();
        input2.style.border = '1px solid red';
        chk_pw.innerText = '필수 입력 항목입니다.';
        input2.focus();
        if(input2.addEventListener('keyup', () => {
            input2.style.border = '1px solid #e5e5e5';
            chk_pw.innerText = '';
        }))
        exit;
    }else {
        const validate = await fetch(`/validate/${input1.value}/${input2.value}`,{method:'POST'});
        const rs = await validate.json()
        console.log(rs)
        if(rs===true){//로그인
            await fetch(`/login/${input1.value}`,{method:'POST'});
            document.querySelector('.modal_back').style.display = 'none';
            document.querySelector('.modal').style.display = 'none';
            logTxt.textContent = '로그아웃'
        }else {//아이디,비밀번호 확인
            chk_all.innerText = '아이디 혹은 비밀번호가 잘못 입력되었습니다.';
            input1.value = "";
            input2.value = "";
        }
    }
})



