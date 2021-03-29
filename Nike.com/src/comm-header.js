'use strict';

const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

(async function logName() {
  const resH = await fetch('./comm-header.html');
  const resF = await fetch('./comm-footer.html');
  const childH = await resH.text();
  const childF = await resF.text();
  header.innerHTML = childH;
  footer.innerHTML = childF;
})();
