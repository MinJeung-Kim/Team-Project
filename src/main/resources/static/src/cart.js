'user strict';

const btn = document.querySelector('.shopbasket');
const close = document.querySelector('.popup-close');

const body = document.querySelector('body');
const background = document.querySelector('.popup-back');
const popupOn = document.querySelector('.cart-popup');

const img = document.querySelector('.detail-product-list > li > a > img');
const name = document.querySelector('.title-wrap');
const style = document.querySelector('.style-code > p');
const price = document.querySelector('.detail-price-text > span');
const sizeSelect = document.querySelector('.opt-list');
const count = document.querySelector('#numberUpDown');

function styleHandler() {
  popupOn.classList.add('on');
  background.classList.add('on');
  body.classList.add('hidden');
  window.scrollTo(0, 0);
}

function innerTextHandler() {
  // 미니 장바구니와 장바구니에서 사용할 노드
  const miniImg = document.querySelector('.mini-wrap > img');
  const miniName = document.querySelector('.mini-name');
  const minStyle = document.querySelector('.mini-style');
  const miniCount = document.querySelector('.mini-count');
  const miniPrice = document.querySelector('.mini-price');
  const totalPrice = document.querySelector('.total-orange');

  miniImg.src = `${img.src}`;
  miniName.innerText = name.textContent;
  minStyle.innerText = style.textContent;
  miniCount.innerText += count.value;
  miniPrice.innerText = price.textContent;
  totalPrice.innerText = price.textContent;
}

function resetHandler() {
  miniCount.innerText = ' ';
}

sizeSelect.addEventListener('click', (e) => {
  const size = document.querySelector('.mini-size');
  size.innerText += e.target.textContent;
});

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

// 미니장바구니에서 장바구니 가기 버튼
const orderGo = document.querySelector('.order-go');

orderGo.addEventListener('click', (e) => {
  // 상품상세페이지에서 사용자가 선택하는 옵션만 get방식으로 보내줌
  const size = document.querySelector('.mini-size');
  e.preventDefault();
  location.href = `./inCart.html?style=${style.innerText}&size=${size.innerText}&count=${count.value}`;
  localStorage.setItem('name', name.textContent);
  localStorage.setItem('img', img.src);
  localStorage.setItem('price', price.textContent);
});
