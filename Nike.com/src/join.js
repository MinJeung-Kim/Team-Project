'use strict'

    let user_id=document.getElementById('join_id').value;
    let user_password=document.getElementById('join_password').value;
    let user_repass=document.getElementById('join_repass').value;
    let user_name=document.getElementById('join_name').value;
    let user_phone=document.getElementById('join_phone').value;

    document.getElementById('join_id').keyup = () => {
    const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (email.test(user_id) == false) {
        document.getElementById('checkId').innerText = "이메일 형태로 입력해주세요. 해당 계정으로 주문내역이 발송됩니다.";
        return false;
    }


}
function pwCheck() {
    const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@%^&*-]).{8,}$/;

}
function goJoin() {

    
}