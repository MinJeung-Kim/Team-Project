'user strict';

const popupBack = document.querySelector('.popup-back');
const orClose = document.querySelector('.or-close');

//팝업 활성화
const handleModal = (test) => {
  if (test == 'update') {
    popupBack.classList.add('on');
    open('focso5@gmail.com');
  }
};

// 팝업창에 데이터 출력
async function open(email) {
  const res = await fetch(`/aDOrderInfo/${email}`);
  const json = await res.json();

  const orderNum = document.querySelector('.or-num');
  const orderDate = document.querySelector('.or-date');
  const title = document.querySelector('.or-content-title');
  const style = document.querySelector('.or-content-style');
  const size = document.querySelector('.or-content-size');
  const count = document.querySelector('.or-content-count');
  const price = document.querySelector('.content-price');
  const sendPrice = document.querySelector('.content-send');
  const select = document.querySelectorAll('#or-content-status > option');
  const songjang = document.querySelector('.content-songjang > input');

  //db statusCd 값과 select option 값이 같으면 selectd 추가
  select.forEach((option) => {
    if (option.value == json.statusCd) {
      option.setAttribute('selected', 'selected');
    }
  });

  orderNum.textContent = json.orderCd;
  orderDate.textContent = json.orderDt;
  title.textContent = json.prdNm;
  style.textContent = json.prdStyle;
  size.textContent = json.prdSize;
  count.textContent = json.prdCnt;
  price.textContent = json.prdPrice;
  sendPrice.textContent = json.sendPrice;
  songjang.value = json.sandNum;
}

orClose.addEventListener('click', () => {
  popupBack.classList.remove('on');
});

// 우편번호 검색
const postBtn = document.querySelector('.postBtn');
const post = document.querySelector('.post');
const addrDetail = document.querySelector('.addrDetail');
const openZipSearch = () => {
  new daum.Postcode({
    oncomplete: function (data) {
      post.value = data.zonecode;
      addrDetail.value = data.address;
    },
  }).open();
};
postBtn.addEventListener('click', openZipSearch);
