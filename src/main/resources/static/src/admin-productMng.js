
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
      },
      attributes: (cell, row) => {
        if (cell, row) { 
          return {
            'onClick': () => handleModal('update'),
            'style': 'cursor: pointer',
          }
        }
      },
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
      width:'100px'
    },
    {
      name: '재고량',
      width:'100px'
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
    },],
    pagination: {
      //페이징 처리
      limit: 5,
    },
    sort:true,
    search:true,
    language: {
      'search': {
        'placeholder': '상품 정보를 검색해주세요!'
      },
      'pagination': {
        'showing': ' 검색 결과 상품',
        'results': () => '건 '
      }
    },
    fixedHeader: true,
    //이미지 넣는 방법
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
      ],
    ],
  }).render(document.getElementById('wrapper'));
  
//금액 설정 슬라이더
var pipsSlider = document.getElementById('slider');

noUiSlider.create(pipsSlider, {
  start: [0, 90],
  step: 30,
  range: {
    min: 0,
    max: 210,
  },
  pips: {
    mode: 'steps',
    density: 3,
    format: wNumb({
      decimals: 2,
      prefix: '$',
    }),
  },
});

var nonLinearStepSliderValueElement = document.getElementById('slider-value');

pipsSlider.noUiSlider.on('update', function (values) {
  nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});
