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
			console.log(applyData);
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
			console.log(e.target);
			let smalls = e.target.parentNode.querySelector('.smallImg');
			if(smalls) {
				smalls.style.display = "block";
			}
		})
	})
	
	clist.forEach((list) => {
		list.addEventListener('mouseleave',function() {
			console.log(list);
			smallImg.forEach((eachSmall) => {
				eachSmall.style.display = 'none';
			})
		})
	})
		
//left navi 접고 펼치기

	const menuBar = document.querySelectorAll('.menuBar');

	menuBar.forEach((element) => {
		element.addEventListener('click', (e) => {;
			console.log(e.currentTarget.parentNode)
			let opennn = e.currentTarget.parentNode; //navi_inner
			let navList = opennn.querySelector('.navList');
			let navi_ck = opennn.querySelector('.navi_ck');

			if(navList.style.display = 'block') {
				let mtop = e.currentTarget.querySelector('.topa');
				let mdown = e.currentTarget.querySelector('.downb');	
				navi_ck.classList.toggle('openCk');
				mtop.classList.toggle('toparr');
				mdown.classList.toggle('dwnarr');
			}
		})
	})

//filter 접고 펼치기

	const hfilter = document.querySelector('#header-filter');
	const none = document.querySelector('.left_navi_title');

	hfilter.addEventListener('click', (e) => {
		console.log(none);
		none.classList.toggle('closed');
	})
