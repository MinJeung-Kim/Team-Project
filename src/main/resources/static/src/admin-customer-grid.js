
 'use strict';
 new gridjs.Grid({
  columns: [
    {
      name: 'No',
      width: '30px'
    },
    { 
      name: '이름',
      attributes: (cell, row) => {
        if (cell, row) { 
          return {
            'onClick': () => handleModal('update',row.cells[3].data),
            //alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}" "${row.cells[2].data}" "${row.cells[3].data}" "${row.cells[4].data}"`),
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
      width: '90px',
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
  data: JSON.parse(customer).map(({boardNum, userNm, gradeCd, userId, tel, gender, statusCd}) => [boardNum, userNm, gradeCd, userId, tel, gender, statusCd]),
}).render(document.getElementById("wrapper"));
