 'use strict';
let custom = customer.replace(/\r\n/g, '\\r\\n');
 new gridjs.Grid({
  columns: [
    {
      id: 'myCheckbox',
      name: gridjs.html('<input type="checkbox"'+
      ' style="margin-left:-50px;margin-top:-5px;position:absolute; name="chk" id="inputA">'),
      formatter: (cell,row) => gridjs.html(
        `<input type="checkbox" class="ckAll" style="margin-left:-50px;position:absolute;" name="chk" value=${row.cells[4].data}>`),
      width: '10px',
      sort: false,
      plugin: {
        component: gridjs.selection.RowSelection,
        props: {
          id: (row) => row.cell(2).data
        },
      },
    },
    {
      name: 'No',
      width: '60px',
    },
    { 
      name: '이름',
      width: "140px",
      attributes: (cell, row) => {
        if (cell, row) { 
          return {
            'onClick': () => handleModal('update',row.cells[4].data),
            'style': 'cursor: pointer',
          }
        }
      },
      sort: false,
    },
    {
      name: '등급',
      sort: false,
    },
    {
      name: '아이디',
      sort: false,
    },
    { 
      name : '전화번호',
      // width: '90px',
      sort: false,
    },
    { 
      name : '성별',
      sort: false,
    },
    { 
      name : '유형',
      sort: false,
    },
  ],
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
      'text-align': 'center',
      'width': '100%'
    }
  },
  data: JSON.parse(custom).map(({listNum, userNm, gradeCd, userId, tel, gender, statusCd}) => [listNum, userNm, gradeCd, userId, tel, gender, statusCd]),
}).render(document.getElementById("wrapper"));
