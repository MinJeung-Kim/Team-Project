'use strict';

//여성카테고리 페이지

	const woman = document.getElementById('woman');
	const url="./category-w.html";
	const content = document.querySelector('.right-content-wrap');
	async function getWomanData() {
		try {
			const getData = await fetch(url);
			const applyData = await getData.text();
			content.innerHTML = '';
			content.innerHTML = applyData;
			//console.log(applyData);
		}catch {
			error => console.log('Error :', error);
		}	
	}
	woman.addEventListener('click', getWomanData);

//이미지 mouseover

	const bigImg = document.querySelectorAll('.category-content-img');
	const smallImg = document.querySelectorAll('.smallImg');
	const clist = document.querySelectorAll('.list-wrap');

	bigImg.forEach((bigs) => {
		bigs.addEventListener('mouseover', (e) => {
			//console.log(e.target);
			let smalls = e.target.parentNode.querySelector('.smallImg');
			if(smalls) {
				smalls.style.display = "block";
			}
		})
	})
	
	clist.forEach((list) => {
		list.addEventListener('mouseleave',function() {
			//console.log(list);
			smallImg.forEach((eachSmall) => {
				eachSmall.style.display = 'none';
			})
		})
	})
		
//left navi 각 메뉴 접고 펼치기

	const menuBar = document.querySelectorAll('.menuBar');

	menuBar.forEach((element) => {
		element.addEventListener('click', (e) => {;
			//console.log(e.currentTarget.parentNode)
			let opennn = e.currentTarget.parentNode; //navi_inner
			let navi_ck = opennn.querySelector('.navi_ck');
			let fas = e.currentTarget.querySelector('.fas');

			navi_ck.classList.toggle('openCk');
			["fa-chevron-up", "fa-chevron-down"].forEach( //배열 직접 지정
				c => fas.classList.toggle(c));
		})
	})

//left navi 전체 접고 펼치기

	const hfilter = document.querySelector('#header-filter');
	const naviTitle = document.querySelector('.left_navi_title');

	hfilter.addEventListener('click', (e) => {
		naviTitle.classList.toggle('closed');
	})
