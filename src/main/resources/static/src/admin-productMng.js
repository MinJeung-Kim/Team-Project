'use strict';

new gridjs.Grid({
  //width조정 했지만 체크박스는 그대로인 이유?
  columns: [
    
{
  id: 'myCheckbox',
  name: gridjs.html('<input type="checkbox"'+
  ' style="margin-left:-50px;margin-top:-5px;position:absolute; name="chk" id="inputA">'),
  formatter: (cell,row) => gridjs.html(
    `<input type="checkbox" class="ckAll" style="margin-left:-50px;position:absolute;" name="chk">`),
  width: '10px',
  sort: false,
  plugin: {
    component: gridjs.selection.RowSelection,
    props: {
      id: (row) => row.cell(2).data
    },
  },
},
    {
      name: '상품코드',
      sort: {
        enabled:false
      },
      attributes: (cell, row) => {
        if (cell, row) { 
          return {
            'onClick': () => openClick('update'),
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
      name: '현재고량',
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
    height:'350px',
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
        '21',
        '2021-03-16',
      ],
      [
        'B-456',
        '이미지',
        '나이키 에어 포스',
        '65,000',
        '200',
        '5',
        '2021-02-16',
      ],
      [
        'C-456',
        '이미지',
        '나이키 코트 레거시',
        '30,000',
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

  //체크박스 전체 선택
  const checkbox = document.querySelector('#inputA');

  checkbox.addEventListener('click', (e) => {
      let ckAll = document.querySelectorAll('.ckAll');
      if(e.target.checked) { 
          console.log('되나?');
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

   //사이즈 추가
   var size_index = 1
   function add_size(){
   $('#pro_size').after(
       '<div class="prd-item" id="pro_size">'
             +'<span class="title">상품 사이즈/색상  </span>'
             +'<select name="size_sml'+size_index+'" class="wr prdcsize">'
               +'<option value="option" selected>선택</option>'
               +'<option value="s">S</option>'
               +'<option value="m">M</option>'
               +'<option value="l">L</option>'
               +'<option value="xl">XL</option>'
               +'</select>'
               +'<select name="size_num"'+size_index+' class="wr prdsesize">'
                   +'<option value="option" selected>선택</option>'
                   +'<option value="230">230</option>'
                   +'<option value="235">235</option>'
                   +'<option value="240">240</option>'
                   +'<option value="245">245</option>'
                   +'<option value="250">250</option>'
                   +'<option value="255">255</option>'
                   +'<option value="260">260</option>'
                   +'<option value="265">265</option>'
                   +'<option value="270">270</option>'
                   +'<option value="275">275</option>'
                   +'<option value="280">280</option>'
                   +'<option value="285">285</option>'
                   +'<option value="290">290</option>'
                   +'<option value="295">295</option>'
                   +'<option value="300">300</option>'
                   +'</select>'
                   +'<input type="text" name="name" '+size_index+' class="wr prdcl" placeholder="색상"  oninput="handleOnInput(this)" >'
               +'<input type="text" name="name" '+size_index+' class="wr prdqty" placeholder="수량" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'
               +'<button onclick="add_size()" type="button" class="plus">+</button>'
               +'<button onclick="delete_size(this)" type="button" class="minus">-</button>'
       +'</div>'
   );
   size_index++;
 }
 function delete_size(obj){
     $(obj).parent().remove();
 }

 //컬러 영어만 입력되게
 function handleOnInput(e)  {
  e.value = e.value.replace(/[^A-Za-z]/ig, '')
}

//숫자만 입력되게
 function onlyNumber(event){
   event = event || window.event;
   var keyID = (event.which) ? event.which : event.keyCode;
   if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
       return;
   else
       return false;
 }
 
 function removeChar(event) {
     event = event || window.event;
     var keyID = (event.which) ? event.which : event.keyCode;
     if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
         return;
     else
         event.target.value = event.target.value.replace(/[^0-9]/g, "");
 }

 //금액 자동 , 입력
 function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

