'user strict';

const popupBack = document.querySelector('.popup-back');
const orClose = document.querySelector('.or-close');

//팝업 활성화
const handleModal = (test) => {
  if (test == 'update') {
    alert('dd');
    popupBack.classList.add('on');
    open('focso5@gmail.com');
  }
};

// 팝업창에 데이터 출력
async function open(email) {
  const res = await fetch(`/inCart/${email}`);
  const json = await res.json();

  const title = document.querySelector('.or-content-title');
  const style = document.querySelector('.or-content-style');
  const size = document.querySelector('.or-content-size');
  const count = document.querySelector('.or-content-count');
  const price = document.querySelector('.or-content content-price');
  const sendPrice = document.querySelector('.content-send');
  const select = document.querySelector('#or-content-status');
  const status = select.options[select.selectedIndex].value;

  alert(status);

  title.textContent = json.prdNm;
  style.textContent = json.prdStyle;
  size.textContent = json.prdSize;
  count.textContent = json.prdCnt;
  price.textContent = json.prdPrice;
  sendPrice.textContent = json.sendPrice;
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
