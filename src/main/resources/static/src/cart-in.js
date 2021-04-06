'user strict';
function getUrlParan() {
  const url = new URL(location.href);
  return [
    url.searchParams.get('style'),
    url.searchParams.get('size'),
    url.searchParams.get('count'),
  ];
}
const cartStyle = document.querySelector('.mini-style');
const cartSize = document.querySelector('.mini-size');
const cartCount = document.querySelector('.mini-count');
cartStyle.innerText = getUrlParan()[0];
cartSize.innerText = getUrlParan()[1];
cartCount.innerText = getUrlParan()[2];
