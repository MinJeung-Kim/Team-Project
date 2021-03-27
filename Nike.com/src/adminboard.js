 new gridjs.Grid({
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
  '상품 만족도',
  {
    name: '제목',
    sort: {
      enabled:false
    },
    formatter: (data) => gridjs.html (
      `<a style="display:inline-block;text-align:center;
      overflow:hidden;text-overflow:ellipsis;
      margin-left:3px;
      white-space:nowrap;width:150px;height:40.8;">${data}</a>`
    )
  },
  {
    name: '내용',
    sort: {
      enabled:false
    },
    width: '200px',
    height:'44px',
    formatter: (data) => gridjs.html (
      `<a style="display:inline-block;text-align:center;
      overflow:hidden;text-overflow:ellipsis;
      white-space:nowrap;width:80%;height:40.8;">${data}</a>`
    )
  },
  {
    name: '작성자',
    sort: {
      enabled:false
    }
  },
  '작성일',
  {
    name: '조회수',
    width: '55px'
  },],
  sort: true,
  data:  [
    [
      '10000-265942',
      '★★★★★',
      '좋아여',
      '배송도 빠르고 나이스하네요ㅋㅋ이제길게써도됨',
      '홍긍정',
      '2021-03-16',
      '1'
    ],
    ['11111-565654', '★★★', '그저그럼', '생각보단 별로', '김깐깐', '2021-03-14', '16'],
    ['12625-120052', '★★★★', '이쁘네요.제목이 줄어드는게 기분이 좋아요', '무난하니 이뻐요', '이평범', '2021-03-13', '10'],
    ['16259-756498', '★', '너무하네요', '배송이 이틀이나걸림ㅡㅡ', '김파탄', '2021-03-01', '126'],
    ['19562-775986', '★★★★★', '착한가격', '천산줄', '나천사', '2021-02-26','21'],
    ['13359-126498', '★★', '귀여움', 'ㅇㅇ', '김미역', '2021-02-22', '312'],
    ['19662-775966', '★★★★★', '잘입을게요', '좋네요', '한만족', '2021-02-18','19'],
  ],
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



// grid.on('ready', () => {
//   // find the plugin with the give plugin ID
//   const checkboxPlugin = grid.config.plugin.get('awesomeCheckbox');
  
//   // subscribe to the store events
//   checkboxPlugin.props.store.on('updated', function (state, prevState) {
//     console.log('checkbox updated', state, prevState);
//   });
// })



