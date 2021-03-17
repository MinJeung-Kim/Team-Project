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
    '주문일(결제일)',
    '주문번호(주문자)',
    '운송장정보(송장번호)',
    '배송비',
    '상품명/옵션',
    '수량',
    '판매가(상품구매금액)',
    {
      name: '총 금액',
      data: null,
      formatter: (_, row) =>
        `$${(row.cells[4].data + row.cells[8].data).toLocaleString()} 원`,
    },
  ],
  pagination: {
    //페이징 처리
    limit: 3,
  },
  search: true, //검색
  fixedHeader: true,
  data: [
    [
      '2021-03-11 10:06:30',
      '20210311-00000031 (김민정)',
      '우체국택배 (123123)',
      2500,
      '나이키 머큐리얼 드림 스피드 슈퍼플라이 8 아카데미 TF 스타일 : CV8122-700 사이즈 : 250 수량 : 1',
      '1',
      149000,
      Array(10)
        .fill()
        .map((x) => [
          Math.round(Math.random() * 100000),
          Math.round(Math.random() * 100000),
        ]),
    ],
    ['Mark', 'mark@gmail.com', '(01) 22 888 4444'],
    ['Eoin', 'eoin@gmail.com', '0097 22 654 00033'],
    ['Sarah', 'sarahcdd@gmail.com', '+322 876 1233'],
    ['Afshin', 'afshin@mail.com', '(353) 22 87 8356'],
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
