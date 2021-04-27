'use strict'

//리뷰 모달 띄우기

async function onClick() {

    //데이터 가져오기
    const res = await fetch('/detail/review');
    const rv = await res.json()
    const result = await fetch('/detail/notice');
    const nt = await result.json()
    console.log(nt);
    console.log(rv);


    window.scrollTo(0,0);
    document.querySelector('.reviewAllBack').classList.add('on');
    document.querySelector('.review-all').classList.add('on');

    const subject = document.querySelector('.review_subject');
    const help = document.querySelector('.thums-num');
    const star = document.querySelector('.customer-star');
    const userNm = document.querySelector('.userName');
    const insDt = document.querySelector('.write-date');
    const prdCd = document.querySelector('.product-code');
    const content = document.querySelector('.comment');
    const file = document.querySelector('.review-img');
    const comfortPt = document.querySelector('#comfortable');
    const sizePt = document.querySelector('#size');
    const durablePt = document.querySelector('#durable');
    const widthPt = document.querySelector('#wide');

    const review_list = document.querySelector('#review_list');
    const li = review_list.querySelector('li');
    //데이터 그리기
    rv.forEach((rv) => {
        const review_grid = document.createElement('div');
        review_grid.classList.add('review_grid');
        li.appendChild(review_grid);
        const review_grid_left = document.createElement('div');
        review_grid_left.classList.add('review_grid_left');
        review_grid.appendChild(review_grid_left);
        const review_grid_top = document.createElement('div');
        review_grid_top.classList.add('review_grid_top');
        review_grid_left.appendChild(review_grid_top);
        const review_subject = document.createElement('p');
        review_subject.classList.add('review_subject');
        review_subject.innerText = rv.subject;
        review_grid_top.appendChild(review_subject);
        const thumb = document.createElement('i');
        thumb.classList.add('fa-thumbs-up');
        thumb.classList.add('far');
        review_grid_top.appendChild(thumb);
        const thums_num = document.createElement('span');
        thums_num.classList.add('thums-num')
        thums_num.innerText = rv.help;
        review_grid_top.appendChild(thums_num);
        const review_content_star = document.createElement('p');
        review_content_star.classList.add('review_content-star');
        review_grid_left.appendChild(review_content_star);
        const customer_star = document.createElement('span');
        customer_star.classList.add('customer-star');
        review_content_star.appendChild(customer_star);
        
        for(let i=1;i<=rv.star;i++) {
            const star = document.createElement('i');
            star.classList.add('fa-star');
            star.classList.add('fas');
            customer_star.appendChild(star);
        }

        const RVuser_name = document.createElement('div');
        RVuser_name.classList.add('RVuser-name');
        review_grid_left.appendChild(RVuser_name);
        const userName = document.createElement('span');
        userName.classList.add('userName');
        userName.innerText = rv.userNm + ' - ';
        RVuser_name.appendChild(userName);
        const write_date = document.createElement('span');
        write_date.classList.add('write-date');
        write_date.innerText = rv.insDt;
        RVuser_name.appendChild(write_date);
        const product_code = document.createElement('span');
        product_code.classList.add('product_code');
        product_code.innerText = rv.prdCd;
        RVuser_name.appendChild(product_code);
        const p = document.createElement('p');
        review_grid_left.appendChild(p);
        const comment = document.createElement('p');
        comment.classList.add('comment');
        comment.innerText = rv.content;
        review_grid_left.appendChild(comment);
        const review_img = document.createElement('p');
        review_img.classList.add('review-img');
        review_grid_left.appendChild(review_img);

        if(rv.filePath != ""){
            const appending_img = document.createElement('span');
            appending_img.classList.add('appending-img');
            review_img.appendChild(appending_img);
            /*
                <a href="null/cmsstatic/reviewAssetFile/20210302/B38DC6E1-4544-4228-8F7A-2505B75CC68F.jpeg">
                          <img
                            src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/reviewAssetFile/20210302/B38DC6E1-4544-4228-8F7A-2505B75CC68F.jpeg?reviewthumbnail"
                            alt="B38DC6E1-4544-4228-8F7A-2505B75CC68F.jpeg"
                          />
                        </a>
            */
        }

        const review_grid_right = document.createElement('div');
        review_grid_right.classList.add('review_grid_right');
        review_grid.appendChild(review_grid_right);
        const customer_gage_wrap = document.createElement('div');
        customer_gage_wrap.classList.add('customer_gage-wrap');
        review_grid_right.appendChild(customer_gage_wrap);

        const customer_gage1 = document.createElement('div');
        customer_gage1.classList.add('customer_gage');
        customer_gage_wrap.appendChild(customer_gage1);
        const title1 = document.createElement('span');
        title1.classList.add('customer_gage-title');
        title1.innerText = '편안함';
        customer_gage1.appendChild(title1);
        const customer_value_box = document.createElement('div');
        customer_value_box.classList.add('customer_value-box');
        customer_gage1.appendChild(customer_value_box);
        //편안함 게이지바
        const input1 = document.createElement('input');
        input1.classList.add('rangebar');
        input1.setAttribute('type','range');
        input1.setAttribute('value',rv.comfortPoint);
        input1.setAttribute('min','0');
        input1.setAttribute('max','10');
        input1.setAttribute('disabled','true');
        customer_value_box.appendChild(input1);
        //
        const valueLt1 = document.createElement('span');
        valueLt1.classList.add('customer_value-txtLeft');
        valueLt1.innerText = '편하지 않은';
        customer_value_box.appendChild(valueLt1);
        const valueRt1 = document.createElement('span');
        valueRt1.classList.add('customer_value-txtRight');
        valueRt1.innerText = '편안한';
        customer_value_box.appendChild(valueRt1);

        const customer_gage2 = document.createElement('div');
        customer_gage2.classList.add('customer_gage');
        customer_gage_wrap.appendChild(customer_gage2);
        const title2 = document.createElement('span');
        title2.classList.add('customer_gage-title');
        title2.innerText = '사이즈';
        customer_gage2.appendChild(title2);
        const customer_value_box2 = document.createElement('div');
        customer_value_box2.classList.add('customer_value-box');
        customer_gage2.appendChild(customer_value_box2);
        //게이지바
        const input2 = document.createElement('input');
        input2.classList.add('rangebar');
        input2.setAttribute('type','range');
        input2.setAttribute('value',rv.sizePoint);
        input2.setAttribute('min','0');
        input2.setAttribute('max','10');
        input2.setAttribute('disabled','true');
        customer_value_box2.appendChild(input2);
        //
        const valueLt2 = document.createElement('span');
        valueLt2.classList.add('customer_value-txtLeft');
        valueLt2.innerText = '작은';
        customer_value_box2.appendChild(valueLt2);
        const valueRt2 = document.createElement('span');
        valueRt2.classList.add('customer_value-txtRight');
        valueRt2.innerText = '큰';
        customer_value_box2.appendChild(valueRt2);
        //////////////////////
        const customer_gage3 = document.createElement('div');
        customer_gage3.classList.add('customer_gage');
        customer_gage_wrap.appendChild(customer_gage3);
        const title3 = document.createElement('span');
        title3.classList.add('customer_gage-title');
        title3.innerText = '내구성';
        customer_gage3.appendChild(title3);
        const customer_value_box3 = document.createElement('div');
        customer_value_box3.classList.add('customer_value-box');
        customer_gage3.appendChild(customer_value_box3);
        //편안함 게이지바
        const input3 = document.createElement('input');
        input3.classList.add('rangebar');
        input3.setAttribute('type','range');
        input3.setAttribute('value',rv.durablePoint);
        input3.setAttribute('min','0');
        input3.setAttribute('max','10');
        input3.setAttribute('disabled','true');
        customer_value_box3.appendChild(input3);
        //
        const valueLt3 = document.createElement('span');
        valueLt3.classList.add('customer_value-txtLeft');
        valueLt3.innerText = '내구성이 없는';
        customer_value_box3.appendChild(valueLt3);
        const valueRt3 = document.createElement('span');
        valueRt3.classList.add('customer_value-txtRight');
        valueRt3.innerText = '내구성이 있는';
        customer_value_box3.appendChild(valueRt3);
        //////////////////////
        const customer_gage4 = document.createElement('div');
        customer_gage4.classList.add('customer_gage');
        customer_gage_wrap.appendChild(customer_gage4);
        const title4 = document.createElement('span');
        title4.classList.add('customer_gage-title');
        title4.innerText = '폭';
        customer_gage4.appendChild(title4);
        const customer_value_box4 = document.createElement('div');
        customer_value_box4.classList.add('customer_value-box');
        customer_gage4.appendChild(customer_value_box4);
        //편안함 게이지바
        const input4 = document.createElement('input');
        input4.classList.add('rangebar');
        input4.setAttribute('type','range');
        input4.setAttribute('value',rv.widthPoint);
        input4.setAttribute('min','0');
        input4.setAttribute('max','10');
        input4.setAttribute('disabled','true');
        customer_value_box4.appendChild(input4);
        //
        const valueLt4 = document.createElement('span');
        valueLt4.classList.add('customer_value-txtLeft');
        valueLt4.innerText = '좁은';
        customer_value_box4.appendChild(valueLt4);
        const valueRt4 = document.createElement('span');
        valueRt4.classList.add('customer_value-txtRight');
        valueRt4.innerText = '넓은';
        customer_value_box4.appendChild(valueRt4);


        //공지사항 데이터 그리기
        const notice_list = document.querySelector('.notice_list');
        nt.forEach((nt) => {
            const notice_list_item = document.createElement('li');
            notice_list_item.classList.add('notice_list-item');
            notice_list.appendChild(notice_list_item);
            const link = document.createElement('a');
            link.setAttribute('onClick',`openNotice(${nt.boardNum})`)
            link.classList.add('list-item-link');
            link.innerText = nt.subject;
            notice_list_item.appendChild(link);
        })
    })
    
    
}
function offClick() {
    window.scrollTo(0,0);
    //데이터 초기화
    const notice_list = document.querySelector('.notice_list');
    notice_list.innerHTML="";
    const review_list = document.querySelector('#review_list');
    const li = review_list.querySelector('li');
    li.innerHTML="";
    
    document.querySelector('.reviewAllBack').classList.remove('on');
    document.querySelector('.review-all').classList.remove('on');
}
document.querySelector('.reviewRead').addEventListener('click',onClick);
document.querySelector('.review_close-button').addEventListener('click',offClick);


// 최신,도움순 클릭 이벤트

const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const chk_lb = document.querySelector('.review_filter');
const reviewsort = document.querySelector('.review_sort');

reviewsort.addEventListener('click' , (event) => {
    if(event.target.className=='review_filter'){
    filter1.classList.toggle('clicked');
    filter2.classList.toggle('clicked');
    }
})




//더보기

const button = document.getElementById('load-more');
const url="./review-more.html";
const list = document.querySelector('.review_read');

const readMore = () => {
    fetch(url)
    .then(response => response.text())
    .then(response => {
        list.innerHTML +=response;
    })
}

button.addEventListener('click', readMore);

//엄지 클릭이벤트

//const thumbs = document.querySelector('.far');
const review_read = document.querySelector('.review_read');

review_read.addEventListener('click', (event) => {
    if(event.target.classList.contains('fa-thumbs-up')){
        event.target.classList.toggle('fas');
    }
})