'user strict';

const grid = new gridjs.Grid({
  search: true,
  pagination: {
    limit: 2,
  },
  language: {
    search: {
      placeholder: '🔍 Search...',
    },
    pagination: {
      previous: '⬅️',
      next: '➡️',
      showing: '😃 Displaying',
      results: () => 'Records',
    },
  },
  sort: {
    multiColumn: false,
    server: {
      url: (prev, columns) => {
        if (!columns.length) return prev;

        const col = columns[0];
        const dir = col.direction === 1 ? 'asc' : 'desc';
        let colName = [
          'payDt',
          'userNm',
          'sendNum',
          'sendPrice',
          'prdNm',
          'orderCnt',
          'prdPrice',
        ][col.index];

        return `${prev}&order=${colName}&dir=${dir}`;
      },
    },
  },
  columns: [
    {
      id: 'awesomeCheckbox',
      name: 'Select',
      width: '30px',
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
    {
      name: '배송비',
      formatter: (cell, row) => {
        return gridjs.h(
          'button',
          {
            className:
              'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
            onClick: () =>
              alert(`배송비 "${row.cells[0].data}" "${row.cells[1].data}"`),
          },
          '2500'
        );
      },
    },
    '상품명/옵션',
    '수량',
    '판매가(상품구매금액)',
    {
      name: '총 금액',
      data: null,
      formatter: (_, row) =>
        `${(row.cells[4].data + row.cells[7].data).toLocaleString()} 원`,
    },
    {
      name: 'Image',
      width: '50px',
      sort: false,
      formatter: (img) =>
        gridjs.html(
          `<center><img style="width: 100px;" src='${img}'/></center>`
        ),
    },
  ],
  server: {
    url: 'data/order-data.json',
    then: (data) =>
      data.data.map((order) => [
        order.payDt,
        order.userNm,
        order.sendNum,
        order.sendPrice,
        order.prdNm,
        order.orderCnt,
        order.prdPrice,
        order.image_uris.small,
      ]),
    total: (data) => data.total_cards,
  },
}).render(document.getElementById('wrapper'));
