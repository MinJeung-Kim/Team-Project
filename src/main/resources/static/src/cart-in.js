'user strict';
function getUrlParan() {
  const url = new URL(location.href);
  return [
    url.searchParams.get('style'),
    url.searchParams.get('size'),
    url.searchParams.get('count'),
  ];
}

// 미니장바구니에서 받아온 파라미터 값 장바구니에 넣기
const cartStyle = document.querySelector('.mini-style');
const cartSize = document.querySelector('.mini-size');
const cartCount = document.querySelector('.mini-count');
cartStyle.innerText = getUrlParan()[0];
cartSize.innerText = getUrlParan()[1];
cartCount.innerText = getUrlParan()[2];

const cartName = document.querySelector('.mini-name');
const cartImg = document.querySelector('.cart-wrap > img');
const cartPrice = document.querySelectorAll('.mini-price');
const optionPrice = document.querySelector('.option-price');

cartName.innerText = localStorage.getItem('name');
cartImg.src = localStorage.getItem('img');

cartPrice.forEach((priceNode) => {
  priceNode.innerText = localStorage.getItem('price');
  optionPrice.innerText = localStorage.getItem('price');
});

const optionTitle = document.querySelector('.option-title');
const optionSubTitle = document.querySelector('.option-sub-title');

optionTitle.innerText = cartName.textContent;
optionSubTitle.innerText = localStorage.getItem('subTitle');

// 상품 삭제
const cartClose = document.querySelector('.cart-close');

cartClose.addEventListener('click', (e) => {
  const products = document.querySelector('.product-list');
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

const optionSize = document.querySelectorAll('.option-size span');
const sizeDiv = document.querySelector('.option-size-warp');

//미니 장바구니에서 선택된 사이즈 옵션 -> 옵션 변경 팝업에 적용
optionSize.forEach((op) => {
  // console.log(op.textContent);
  if (op.textContent === cartSize.textContent) {
    console.log(cartSize.textContent);
    op.classList.add('change-color');
  }
});

//선택에 따른 사이즈 background 색상 변경
sizeDiv.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    console.log(e.target.textContent);
    optionSize.forEach((option) => {
      e.target === option
        ? option.classList.add('change-color')
        : option.classList.remove('change-color');
    });
  }
});

// 수량 변경
const minus = document.querySelector('.minus');
const puls = document.querySelector('.puls');
const optionCount = document.querySelector('.option-count > input');

//미니 장바구니에서 선택된 수량 옵션 -> 옵션 변경 팝업에 적용
optionCount.value = cartCount.innerText;

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

// 옵션 변경하기 버튼 클릭
const optBtn = document.querySelector('.option-update');

optBtn.addEventListener('click', () => {
  popupBack.classList.remove('on');
  optionPopup.classList.remove('on');

  sizeDiv.addEventListener('click', (e) => {
    //클릭된 사이즈 값 장바구니에 적용하기 !!!
    cartSize.innerText = e.target.textContent;
  });
  console.log(optionCount.value);
  cartCount.innerText = optionCount.value;
});

const sendPrice = document.querySelector('.send-price');
const pdPrice = document.querySelector('.pd-price');
const totPrice = document.querySelector('.tot-price');

totPrice.innerText = `${sendPrice.textContent} + ${pdPrice.textContent}`;
console.log(sendPrice.textContent);

// 주문하기 버튼
const orderBtn = document.querySelector('.order-btn');

const prdPrice = document.querySelector('.mini-price');
const prdSend = document.querySelector('.send-price');
const prdTot = document.querySelector('.tot-price');

orderBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  localStorage.setItem('prdPrice', prdPrice.textContent);
  localStorage.setItem('prdSend', prdSend.textContent);
  localStorage.setItem('prdTot', prdTot.textContent);
});
