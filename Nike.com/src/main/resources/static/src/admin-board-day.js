'use strict'

const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const inputS=document.getElementById('date_inputS');
const inputE=document.getElementById('date_inputE');

//default
inputS.valueAsDate = new Date();
inputE.valueAsDate = new Date();

//오늘
bt1.addEventListener('click', () => {
    inputS.valueAsDate = new Date();
})
//1주일
bt2.addEventListener('click', () => {
    let today = new Date();
    let ago = today.getTime() - (1000*60*60*24*7);
    today.setTime(ago);

    let y = today.getFullYear();
    let m = today.getMonth()+1;
    let d = today.getDate();

    if( m < 10 ) { m = "0" + m; }
    if( d < 10 ) { d = "0" + d; }

    let result = y + "-" + m + "-" + d;
    inputS.value = result;
    
})
//1개월
bt3.addEventListener('click', () => {
    let today = new Date();
    let ago = today.getTime() - (1000*60*60*24*30);
    today.setTime(ago);

    let y = today.getFullYear();
    let m = today.getMonth()+1;
    let d = today.getDate();

    if( m < 10 ) { m = "0" + m; }
    if( d < 10 ) { d = "0" + d; }

    let result = y + "-" + m + "-" + d;
    inputS.value = result;
    
})
//3개월
bt4.addEventListener('click', () => {
    let today = new Date();
    let ago = today.getTime() - (1000*60*60*24*30*3);
    today.setTime(ago);

    let y = today.getFullYear();
    let m = today.getMonth()+1;
    let d = today.getDate();

    if( m < 10 ) { m = "0" + m; }
    if( d < 10 ) { d = "0" + d; }

    let result = y + "-" + m + "-" + d;
    inputS.value = result;
    
})
//6개월
bt5.addEventListener('click', () => {
    let today = new Date();
    let ago = today.getTime() - (1000*60*60*24*30*6);
    today.setTime(ago);

    let y = today.getFullYear();
    let m = today.getMonth()+1;
    let d = today.getDate();

    if( m < 10 ) { m = "0" + m; }
    if( d < 10 ) { d = "0" + d; }

    let result = y + "-" + m + "-" + d;
    inputS.value = result;
    
})