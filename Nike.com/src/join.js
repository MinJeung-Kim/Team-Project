'use strict'

let user_name = document.getElementById('join_name').value
let user_phone = document.getElementById('join_phone').value

document.getElementById('join_id').addEventListener('keyup', () => {
  const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
  let user_id = document.getElementById('join_id').value

  if (email.test(user_id) == false) {
    document.getElementById('join_id').style.border = '1px solid red'
    document.getElementById('checkId').innerText = '이메일 형태로 입력해주세요. 해당 계정으로 주문내역이 발송됩니다.'
    return false
  } else {
    document.querySelector('.check').style.color = 'gray'
    document.getElementById('checkId').innerText = '올바른 입력입니다'
  }
  document.getElementById('join_id').style.border = '1px solid #cfcaca'
  document.querySelector('.check').style.color = 'red'
})
document.getElementById('join_password').addEventListener('keyup', () => {
  const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@%^&*-]).{8,16}$/
  let user_password = document.getElementById('join_password').value

  if (pass.test(user_password) == false) {
    document.getElementById('join_password').style.border = '1px solid red'
    document.getElementById('checkPasswd').innerText = '영문 대 소문+숫자+특수문자 8~16자리(특수문자 괄호(),<>는 사용 불가)'
    return false
  } else {
    document.querySelector('.check').style.color = 'gray'
    document.getElementById('checkPasswd').innerText = '올바른 입력입니다'
  }
  document.getElementById('join_password').style.border = '1px solid #cfcaca'
  document.querySelector('.check').style.color = 'red'
})
document.getElementById('join_repass').addEventListener('keyup', () => {
  let user_password = document.getElementById('join_password').value
  let user_repass = document.getElementById('join_repass').value

  if (user_password == user_repass) {
    document.querySelector('.check').style.color = 'gray'
    document.getElementById('checkRepass').innerText = '올바른 입력입니다'
  } else {
    document.getElementById('join_repass').style.border = '1px solid red'
    document.getElementById('checkRepass').innerText = '입력값이 일치하지 않습니다.'
  }
  document.getElementById('join_repass').style.border = '1px solid #cfcaca'
  document.querySelector('.check').style.color = 'red'
})
document.getElementById('join_name').addEventListener('keyup', () => {
  const name = /^[가-힣a-zA-Z]+/
  let user_name = document.getElementById('join_name').value

  if (name.test(user_name) == false) {
    document.getElementById('join_name').style.border = '1px solid red'
    document.getElementById('checkName').innerText = '한글과 영문만 입력 가능합니다.'
  } else {
    document.querySelector('.check').style.color = 'gray'
    document.getElementById('checkName').innerText = '올바른 입력입니다'
  }
  document.getElementById('join_name').style.border = '1px solid #cfcaca'
  document.querySelector('.check').style.color = 'red'
})
document.getElementById('join_phone').addEventListener('keyup', () => {
  const number = /^[0-9]+/
  let user_phone = document.getElementById('join_phone').value

  if (number.test(user_phone) == false) {
    document.getElementById('join_phone').style.border = '1px solid red'
    document.getElementById('checkPhone').innerText = '숫자만 입력 가능합니다.'
  } else {
    document.querySelector('.check').style.color = 'gray'
    document.getElementById('checkPhone').innerText = '올바른 입력입니다'
  }
  document.getElementById('join_phone').style.border = '1px solid #cfcaca'
  document.querySelector('.check').style.color = 'red'
})

document.querySelector('.join_button').addEventListener('click', () => {
  let user_id = document.getElementById('join_id').value
  let user_password = document.getElementById('join_password').value
  let user_repass = document.getElementById('join_repass').value
  let user_name = document.getElementById('join_name').value
  let user_phone = document.getElementById('join_phone').value

  if (user_id == '') {
    document.getElementById('join_id').style.border = '1px solid red'
    document.getElementById('checkId').innerText = '필수 입력 항목입니다.'
    document.getElementById('join_id').focus()
    exit
  } else if (user_password == '') {
    document.getElementById('join_password').style.border = '1px solid red'
    document.getElementById('checkPasswd').innerText = '필수 입력 항목입니다.'
    document.getElementById('join_password').focus()
    exit
  } else if (user_repass == '') {
    document.getElementById('join_repass').style.border = '1px solid red'
    document.getElementById('checkRepass').innerText = '필수 입력 항목입니다.'
    document.getElementById('join_repass').focus()
    exit
  } else if (user_name == '') {
    document.getElementById('join_name').style.border = '1px solid red'
    document.getElementById('checkName').innerText = '필수 입력 항목입니다.'
    document.getElementById('join_name').focus()
    exit
  } else if (user_phone == '') {
    document.getElementById('join_phone').style.border = '1px solid red'
    document.getElementById('checkPhone').innerText = '필수 입력 항목입니다.'
    document.getElementById('join_phone').focus()
    exit
  } else if (!document.getElementById('agreeCheck').checked || !document.getElementById('pinfoCheck').checked) {
    alert('이용 약관에 동의 해주세요.')
    exit
  }
})
