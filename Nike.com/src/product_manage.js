
new gridjs.Grid({
  //width조정 했지만 체크박스는 그대로인 이유?
    columns: [
      {
        id: 'awesomeCheckbox',
        name: '',
        width:'3%',
        plugin: {
          component: gridjs.selection.RowSelection,
          props: {
            id: (row) => row.cell(2).data,
          },
        },
      },
      '상품 코드',
      '상품 이미지',
      '상품명',
      '가격',
      '전체수량',
      '재고량',
      '상품리뷰',
      '등록날짜',
      '관리',
    ],
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