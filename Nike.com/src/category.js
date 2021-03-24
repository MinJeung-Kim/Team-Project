'use strict';
	
	//더보기
	const seeMore = document.querySelector('.seeMore');
	const nFirst = document.querySelector('.nFirst');
	const staged = document.querySelector('.staged');
	const more = function() {
		nFirst.insertBefore(staged, nFirst.lastElementChild);
		seeMore.innerHTML='접기';
	}
	
	seeMore.addEventListener('click',more);

	//여성 상품으로 변경
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
		//큰 이미지 배열을 bigImg라는 변수에 넣음
	for(let i = 0; i < bigImg.length; i++) { //bigImg의 개수만큼 for문 돌리기
		bigImg[i].addEventListener('mouseover', function() {
			console.log(this.parentNode.parentNode.querySelector('.smallImg'));
				//여기서 this는 내가 mouseover한 큰 사진을 가리킴
			let smallImg = this.parentNode.parentNode.querySelector('.smallImg');
			if(smallImg) {
				smallImg.style.display = "block";
			}
		});
		bigImg[i].addEventListener('mouseout', function() {
			let smallImg = this.parentNode.parentNode.querySelector('.smallImg');
			if(smallImg) {
				smallImg.style.display = "none";
			}
		})
	}

