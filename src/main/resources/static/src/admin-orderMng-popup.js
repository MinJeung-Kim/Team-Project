'user strict';
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
