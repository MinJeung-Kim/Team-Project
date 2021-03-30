
new gridjs.Grid({
  //width조정 했지만 체크박스는 그대로인 이유?
  columns: [
    {
      id: 'myCheckbox',
      name: gridjs.html('<input type="checkbox"'+
      ' style="margin-left:-50px;margin-top:-5px;position:absolute;"'+
       'name="chk" id="inputA">'),
      formatter: (cell,row) => gridjs.html(
          `<input type="checkbox" style="margin-left:-50px;position:absolute;" name="chk">`
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
      name: '상품코드',
      sort: {
        enabled:false
      }
    },
    {
      name: '상품이미지',
      sort: {
        enabled:false
      }
    },
    {
      name: '상품명',
      sort: {
        enabled:false
      }
    },
    {
      name: '가격',
      
    },
    {
      name: '전체수량',
      width:'70px'
    },
    {
      name: '재고량',
      width:'70px'
    },
    {
      name: '상품리뷰',
      sort: {
        enabled:false
      }
    },
    {
      name: '등록날짜',
      sort: {
        enabled:false
      }
    },
    {
      name: '관리',
      sort: {
        enabled:false
      }
    } ],
    pagination: {
      //페이징 처리
      limit: 5,
    },
    sort:true,
    search:true,
    language: {
      'search': {
        'placeholder': '🔍 Search...'
      },
      'pagination': {
        'previous': '⬅️',
        'next': '➡️',
        'showing': '😃 Displaying',
        'results': () => 'Records'
      }
    },
    fixedHeader: true,
    //이미지 넣는 방법, 관리에 버튼 추가하는 방법..
    data: [
      [
        'A-123',
        '이미지',
        '나이키 와플 트레이너',
        '100,000',
        '100',
        '품절',
        '21',
        '2021-03-16',
        '수정',
      ],
      [
        'B-456',
        '이미지',
        '나이키 에어 포스',
        '65,000',
        '200',
        '100',
        '5',
        '2021-02-16',
        '수정',
      ],
      [
        'C-456',
        '이미지',
        '나이키 코트 레거시',
        '30,000',
        '400',
        '50',
        '0',
        '2021-03-01',
        '수정',
      ],
    ],
  }).render(document.getElementById('wrapper'));
  
  grid.on('ready', () => {
    // find the plugin with the give plugin ID
    const checkboxPlugin = grid.config.plugin.get('awesomeCheckbox');
  
    // subscribe to the store events
    checkboxPlugin.props.store.on('updated', function (state, prevState) {
      console.log('checkbox updated', state, prevState);
    });
  });