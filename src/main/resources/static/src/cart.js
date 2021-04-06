'user strict';

const btn = document.querySelector('.shopbasket');
const close = document.querySelector('.popup-close');

const body = document.querySelector('body');
const background = document.querySelector('.popup-back');
const popupOn = document.querySelector('.cart-popup');

const img = document.querySelector('.detail-product-list > li > a > img');
const name = document.querySelector('.title-wrap');
const price = document.querySelector('.detail-price-text > span');
const sizeSelect = document.querySelector('.opt-list');
const count = document.querySelector('#numberUpDown');

const miniCount = document.querySelector('.mini-count');

function styleHandler() {
  popupOn.classList.add('on');
  background.classList.add('on');
  body.classList.add('hidden');
  window.scrollTo(0, 0);
}

// 미니 장바구니와 장바구니의 공통 함수
function innerTextHandler() {
  const miniName = document.querySelector('.mini-name');
  const miniPrice = document.querySelector('.mini-price');
  const totalPrice = document.querySelector('.total-orange');
  const miniImg = document.querySelector('.mini-wrap > img');

  miniImg.src = `${img.src}`;
  miniName.innerText = name.textContent;
  miniCount.innerText += count.value;
  miniPrice.innerText = price.textContent;
  totalPrice.innerText = price.textContent;
}

function resetHandler() {
  miniCount.innerText = ' ';
}

// sizeSelect.addEventListener('click', (e) => {
//   const size = document.querySelector('.mini-size');
//   size.innerText += e.target.textContent;
// });

// 장바구니 버튼 클릭 시  미니 장바구니 팝업 창 활성화
btn.addEventListener('click', () => {
  styleHandler();
  innerTextHandler();
});

close.addEventListener('click', () => {
  popupOn.classList.remove('on');
  background.classList.remove('on');
  body.classList.remove('hidden');
  resetHandler();
});
