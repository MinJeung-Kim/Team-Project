
 'use strict';
 
 new gridjs.Grid({
  columns: [
    {id: 'myCheckbox',
      name: gridjs.html('<input type="checkbox"'+
      ' style="margin-left:-50px;margin-top:-5px;position:absolute;"'+
       'name="chk" id="inputA">'),
      formatter: (cell,row) => gridjs.html(
        `<input type="checkbox" style="margin-left:-50px;position:absolute;"`+
        `name="chk">`
      ),
      sort: false,
      width: '10px',
    },
    {
      name: 'No',
      width: '40px'
    },
    { 
      name: '이름',
      attributes: (cell, row) => {
        if (cell, row) { 
          return {
            'onClick': () => handleModal('update'),
            'style': 'cursor: pointer',
          }
        }
      },
    },
    '등급',
    {
      name: '아이디',
      sort: false,
    },
    { 
      name : '전화번호',
      // width: '90px',
      sort: false,
    },
    '성별', 
    '유형'],
  sort: true,
  search: true,
  pagination: {
    limit: 5,
  },
  language: {
    'search': {
      'placeholder': '관련 검색어 입력'
    },
    'pagination': {
      'previous': '⬅',
      'next': '➡',
      'showing': ' ',
      'results': () => 'Records'
    }
  },
  style: {
    table: {
      'text-align': 'center'
    }
  },
  data: [
    ['','10', 'bom', 'VIP', 'bmbm1@naver.com', '010-4464-7124', '여', '정상'],
    ['','09', '김민정', 'GOLD', 'mj114@gmail.com', '010-0011-4468', '여', '정상'],
    ['','08', '통붕이', 'FAMILY', 'tb991@hanmail.net', '010-3320-0201', '남', '탈퇴'],
    ['','07', '김예담', 'FAMILY', 'yyee@hotmail.com', '010-1234-4928', '여', '휴면'],
    ['','06', '박서윤', 'SILVER', 'sysy66@nate.com', '010-9977-4687', '여', '휴면'],
    ['','05', '산타', 'VIP', 'stst32@stst.net', '010-8765-1234', '남', '탈퇴']
  ],
}).render(document.getElementById("wrapper"));
