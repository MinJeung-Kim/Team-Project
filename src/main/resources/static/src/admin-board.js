 new gridjs.Grid({
  columns: [
    {
      id: 'myCheckbox',
      name: gridjs.html('<input type="checkbox"'+
      ' style="margin-left:-50px;margin-top:-5px;position:absolute;"'+
       'name="chk" id="inputA">'),
      formatter: (cell,row) => gridjs.html(
          `<input type="checkbox" class="ckAll" style="margin-left:-50px;position:absolute;" name="chk" id="${row.cell(2).data}"value="${row.cell(1).data}">`
      ),
      plugin: {
        // install the RowSelection plugin
        component: gridjs.selection.RowSelection,
        // RowSelection config
        props: {
          // use the "email" column as the row identifier
          id: (row) => row.cell(1).data,
        }
      },
      width: '10px',
      sort: {
        enabled:false
      }
    },
    {
      name: 'NO',
      width: '25px',
      sort: {
        enabled:false
      }
    },
    {
      name: '구분',
      width: '40px',
      sort: {
        enabled:false
      }
    },
    {
      name: '상품코드',
      sort: {
        enabled:false
      }
    },
  '상품 만족도',
  {
    name: '제목',
    sort: {
      enabled:false
    },
    formatter: (data) => gridjs.html (
      `<a style="display:inline-block;text-align:center;
      overflow:hidden;text-overflow:ellipsis;
      margin-left:3px;color:purple;
      white-space:nowrap;width:150px;height:40.8;">${data}</a>`
    ),
    attributes: (cell, row) => {
      if (cell, row) {
        return {
          'onClick': () => open(row.cell(1).data)
        }
      }
    }
  },
  {
    name: '내용',
    sort: {
      enabled:false
    },
    width: '200px',
    height:'44px',
    formatter: (data) => gridjs.html (
      `<span style="display:inline-block;text-align:center;
      overflow:hidden;text-overflow:ellipsis;
      white-space:nowrap;width:80%;height:40.8;">${data}</span>`
    ),
  },
  {
    name: '작성자',
    sort: {
      enabled:false
    }
  },
  '작성일',
  {
    name: '도움',
    width: '50px'
  },],
  sort: true,
  data: JSON.parse(adBoard).map(({boardNum, boardStatus, prdCd, star, subject, content, userNm, insDt, help}) => [boardNum, boardStatus, prdCd, star, subject, content, userNm, insDt, help]),
  search: {
    enabled:true
  },
  
  pagination: {
    enabled: true,
    limit: 5,
    summary: false
  },
  style: {
    table: {
      'text-align': 'center'
    }
  }
}).render(document.getElementById('wrapper'));


//체크박스 전체선택
const checkbox = document.querySelector('#inputA');

    checkbox.addEventListener('click', (e) => {
        let ckAll = document.querySelectorAll('.ckAll');
        if(e.target.checked) { 
            ckAll.forEach((ckbox) => {
                ckbox.checked = true;
            })
        } else {
            ckAll.forEach((ckbox) => {
                ckbox.checked = false;
            })
        }
        ckAll.forEach((ckbox) => {
            ckbox.addEventListener('click', () => {
                checkbox.checked = false;
            })
        })
        
    })



