'use strict'

let fileTarget = document.querySelector('.review_input3');

fileTarget.addEventListener('change', () => {
    let result;//추출한 파일명.확장자 넣을 변수
    
    let pathHeader = fileTarget.value.lastIndexOf("\\");
    let pathMiddle = fileTarget.value.lastIndexOf(".");
    let pathEnd = fileTarget.value.length;
    let fileName = fileTarget.value.substring(pathHeader+1, pathMiddle);
    let extName = fileTarget.value.substring(pathMiddle+1, pathEnd);
    result = fileName+"."+extName;
    document.querySelector('.upload-name').value = result;
})