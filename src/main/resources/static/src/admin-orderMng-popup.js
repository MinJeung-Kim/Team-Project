'user strict';

const popupBack = document.querySelector('.popup-back');
const orClose = document.querySelector('.or-close');

const handleModal = (test) => {
  if (test == 'update') {
    popupBack.classList.add('on');
  }
};

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
