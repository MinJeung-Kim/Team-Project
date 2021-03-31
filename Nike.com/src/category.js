'use strict';
	
//더보기

	const seeMore = document.querySelector('.seeMore');
	const nFirst = document.querySelector('.nFirst');
	const child = document.querySelector('.child');
	const more = function() {
		child.style.display = "block";
		seeMore.innerHTML='- 접기';
	}
	seeMore.addEventListener('click', more);

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
	bigImg.forEach((bigs) => {
		bigs.addEventListener('mouseover',function() {
			let smallImg = this.parentNode.querySelector('.smallImg');
			if(smallImg) {
				smallImg.style.display = "block";
			}
		});
	});
	
	const smallImg = document.querySelectorAll('.smallImg');
	smallImg.forEach((smalls) => {
		smalls.addEventListener('mouseleave',function() {
			smalls.style.display = "none";
		})
	})
		
