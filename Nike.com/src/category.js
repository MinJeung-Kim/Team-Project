'use strict';

	// const menuClick = function(){
	// 	$.ajax({
	// 		type: 'GET', //or POST
	// 		url: './category-w.html',
	// 		dataType: 'html',
	// 		success: function(data) {
	// 			$('.right-content-wrap').html('');
	// 			$('.right-content-wrap').append(data);
	// 		}, 
	// 		error: function(error) {
	// 			alert(error);
	// 		}
	// 	});
	// };
	
	//여성 상품으로 변경
	const woman = document.getElementById('woman');
	const url="./category-w.html";
	const content = document.querySelector('.right-content-wrap');

	const moveWoman = () => {
	fetch(url)
	.then(response => response.text())
	.then(response => {
		content.innerHTML = '';
		content.innerHTML = response;
		console.log(response);
	})
	.catch(error => console.log('Error :', error));
	}

	woman.addEventListener('click', moveWoman);

	
	//이미지 mouseover
	const bigImg = document.querySelectorAll('.category-content-img');
		//큰 이미지 배열을 bigImg라는 변수에 넣음
	let i = 0;
	for(i = 0; i < bigImg.length; i++) { //bigImg의 개수만큼 for문 돌리기
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

