'use strict';

//이름
const frm = document.getElementById('reg_form'); //form id값 가져오기
const fName = /^[가-힣a-zA-Z]+/; //정규식
const regCheck = function(){
    if(fName.test(frm.name.value) == true){ //test()로 유효성 검사 true
        frm.name.style.border = "1px solid gray";
    } else if(fName.test(frm.name.value) == false) {//test()로 유효성 검사 false
        alert("이름은 한글과 영문만 입력 가능합니다.");
        frm.name.style.border = "1px solid red";
        frm.name.focus();
        return false; 
    }
}
