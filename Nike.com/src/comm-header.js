'use strict'

// jQuery로 작성된 코드 나중에 이렇게 변경 할 것.
// 지금은 신경 안써도 되는 코드!!!

const header = document.querySelector('#header')
const footer = document.querySelector('#footer')

;(async function logName() {
  const resH = await fetch('./comm-header.html')
  const resF = await fetch('./comm-comm-footer.html')
  const childH = await resH.text()
  const childF = await resF.text()
  header.innerHTML = childH
  footer.innerHTML = childF
})()
