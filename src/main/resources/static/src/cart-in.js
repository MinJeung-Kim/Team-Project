'user strict';
function getUrlParan() {
  const url = new URL(location.href);
  return [
    url.searchParams.get('style'),
    url.searchParams.get('size'),
    url.searchParams.get('count'),
  ];
}

// 받아온 파라미터 값 넣기
const cartStyle = document.querySelector('.mini-style');
const cartSize = document.querySelector('.mini-size');
const cartCount = document.querySelector('.mini-count');
cartStyle.innerText = getUrlParan()[0];
cartSize.innerText = getUrlParan()[1];
cartCount.innerText = getUrlParan()[2];

const cartName = document.querySelector('.mini-name');
const cartImg = document.querySelector('.cart-wrap > img');
const cartPrice = document.querySelectorAll('.mini-price');
cartName.innerText = localStorage.getItem('name');
cartImg.src = localStorage.getItem('img');

cartPrice.forEach((priceNode) => {
  priceNode.innerText = localStorage.getItem('price');
});

// 상품 삭제
const cartClose = document.querySelector('.fa-times');

cartClose.addEventListener('click', (e) => {
  const products = document.querySelector('.product-list');
  console.log(e.target);
  products.remove();
});

// *** 옵션변경 팝업 ***
const optionOpen = document.querySelector('.option-btn');
const popupBack = document.querySelector('.popup-back');
const optionPopup = document.querySelector('.option-popup');
const optionClose = document.querySelector('.option-close');

optionOpen.addEventListener('click', () => {
  popupBack.classList.add('on');
  optionPopup.classList.add('on');
});

optionClose.addEventListener('click', () => {
  popupBack.classList.remove('on');
  optionPopup.classList.remove('on');
});

//선택한 사이즈 색상 변경
const optionSize = document.querySelectorAll('.option-size span');
const sizeDiv = document.querySelector('.option-size-warp');

sizeDiv.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    optionSize.forEach((option) => {
      e.target === option
        ? option.classList.add('change-color')
        : option.classList.remove('change-color');
    });
  }
});
// optionSize.forEach((seleSize) => {
//   seleSize.addEventListener('click', (e) => {
//     // 클릭 요소 담아서 이전 클릭 요소와 현재 클릭 요소 비교
//     const clickNode = e.target;
//     if (clickNode === e.target) {
//       e.target.classList.add('change-color');
//     } else {
//       //클릭 되지않은 노드의 change-color클래스 삭제하기
//       e.target.classList.remove('change-color');
//     }
//   });
// });

// 수량 변경

const minus = document.querySelector('.minus');
const puls = document.querySelector('.puls');
const optionCount = document.querySelector('.option-count > input');

const msg = document.querySelector('.msg');
minus.addEventListener('click', () => {
  msg.innerText = ' ';
  if (optionCount.value > 1) {
    optionCount.value = `${optionCount.value - 1}`;
  } else {
    minus.classList.add('clickNone');
  }
});

puls.addEventListener('click', () => {
  if (optionCount.value < 10) {
    optionCount.value = `${parseInt(optionCount.value) + 1}`;
  } else if (optionCount.value == 10) {
    msg.innerText = `10개 까지 구매가능 합니다.`;
  }
});