new gridjs.Grid({
    columns: [
      {
        id: 'awesomeCheckbox',
        name: 'Select',
        plugin: {
          component: gridjs.selection.RowSelection,
          props: {
            id: (row) => row.cell(2).data,
          },
        },
      },
      '상품 코드',
      '상품 만족도',
      '제목',
      '내용',
      '작성자',
      '작성일',
      '조회수',
    ],
    pagination: {
      //페이징 처리
      limit: 5,
    },
    //fixedHeader: true,
    data: [
      [
        '10000-265942',
        '★★★★★',
        '좋아여',
        '배송도 빠르고 나이스하네요',
        '홍긍정',
        '2021-03-16',
        '1',
        149000,
        Array(10)
          .fill()
          /*.map((x) => [
            Math.round(Math.random() * 100000),
            Math.round(Math.random() * 100000),
          ]),*/
      ],
      ['11111-565654', '★★★', '그저그럼', '생각보단 별로', '김깐깐', '2021-03-14', '16'],
      ['12625-120052', '★★★★', '이쁘네요', '무난하니 이뻐요', '이평범', '2021-03-13', '10'],
      ['16259-756498', '★', '너무하네요', '배송이 이틀이나걸림ㅡㅡ', '김파탄', '2021-03-01', '126'],
      ['19562-775986', '★★★★★', '착한가격', '천산줄', '나천사', '2021-02-26','21'],
      ['13359-126498', '★★', '귀여움', 'ㅇㅇ', '김미역', '2021-02-22', '312'],
      ['19662-775966', '★★★★★', '잘입을게요', '좋네요', '한만족', '2021-02-18','19'],
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