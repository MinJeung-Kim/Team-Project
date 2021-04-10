'user strict';

new gridjs.Grid({
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
      id: 'myCheckbox',
      name: gridjs.html(
        '<input type="checkbox"' +
          ' style="margin-left:-50px;margin-top:-5px;position:absolute;"' +
          'name="chk" id="inputA">'
      ),
      formatter: (cell, row) =>
        gridjs.html(
          `<input type="checkbox" style="margin-left:-50px;position:absolute;" name="chk">`
        ),
      plugin: {
        // install the RowSelection plugin
        component: gridjs.selection.RowSelection,
        // RowSelection config
        props: {
          // use the "email" column as the row identifier
          id: (row) => row.cell(1).data,
        },
      },
      width: '10px',
      sort: {
        enabled: false,
      },
    },
    '주문일(결제일)',
    {
      name: '주문번호(주문자)',
      attributes: (cell, row) => {
        if ((cell, row)) {
          return {
            onClick: () => handleModal('update'),
            //alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}" "${row.cells[2].data}" "${row.cells[3].data}" "${row.cells[4].data}"`),
            style: 'cursor: pointer; color: blue',
          };
        }
      },
    },
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
  className: {
    td: 'gridjs-checkbox',
  },
}).render(document.getElementById('wrapper'));
