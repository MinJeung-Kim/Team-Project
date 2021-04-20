'use strict';

const frm = document.getElementById('reg_form'); //form id값 가져오기
const update = document.querySelector('.update');
const regName = /^[가-힣a-zA-Z]+/; //정규식
const regEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@%^&*-]).{8,16}$/;
const regPhone = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;

const regFunc = function(e) {
    e.preventDefault();
    //이름
    if(frm.name.value==null || frm.name.value=="") {
        alert("이름을 입력하세요.");
        frm.name.focus();
        return false; 
    } else {
        if(regName.test(frm.name.value) == false) {//test()로 유효성 검사 false
            alert("이름은 한글과 영문만 입력 가능합니다.");
            frm.name.value = '';
            frm.name.focus();
            return false; 
        } 
    }

    //ID(이메일)
    if(frm.email.value==null || frm.email.value=="") {
        alert("이메일을 입력하세요.");
        frm.email.value = '';
        frm.email.focus();
        return false; 
    } else {
        if(regEmail.test(frm.email.value) == false) {
            alert("이메일 형태로 입력해주세요. \n이메일은 영문만 가능합니다. \n예시)abcd@efg.com");
            frm.email.value = '';
            frm.email.focus();
            return false;
        } 
    }

    //비밀번호
    if(frm.password.value==null || frm.password.value=="") {
        alert("비밀번호를 입력하세요.");
        frm.password.focus();
        return false; 
    } else {
        if(regPass.test(frm.password.value) == false){
            alert("비밀번호는 영문 대 소문+숫자+특수문자 8~16자리로 입력해주세요."+
            "\n특수문자 괄호(),<>는 사용 불가");
            frm.password.value = '';
            frm.password.focus();
            return false;
        } 
    }

    //성별
    
    if(frm.gender.value == 'all') {
        alert("성별을 선택하세요.");
        return false; 
    }

    //전화번호
    if(frm.phone.value==null || frm.phone.value=="") {
        alert("전화번호를 입력하세요.");
        frm.phone.focus();
        return false; 
    } else {
        if(regPhone.test(frm.phone.value) == false) {
            if(frm.phone.value.includes("-")) {
                alert("전화번호는 -없이 입력해주세요.");
                frm.phone.value = '';
                frm.phone.focus();
                return false;
            } else {
                alert("전화번호는 숫자만 입력 가능합니다.");
                frm.phone.value = '';
                frm.phone.focus();
                return false;
            }
        } else if(frm.phone.value.length >= 12) {
            alert("전화번호는 11자를 넘길 수 없습니다.");
            frm.phone.value = '';
            frm.phone.focus();
            return false;
        } else {
            if(confirm('등록하시겠습니까?') == true) {
                frm.submit();
            }
        }
    }
}

frm.addEventListener('submit', regFunc);
update.addEventListener('submit', uptCheck);
