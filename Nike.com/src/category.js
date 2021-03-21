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
	const big1 = document.getElementById('big1');
	const smallImg = document.querySelector('.smallImg');
	const sImgfirst = smallImg.querySelector('img');
	const sImg = smallImg.querySelectorAll('img'); //배열 리턴
	
	function appear() {
		smallImg.style.display = "block";
	}
	function disappear() {
		smallImg.style.display = "none";
	}
	
	for(let i = 0; i < sImg.length; i++) {
		sImg[i].onmouseover = function() {
			big1.src=this.src;
		}
		sImg[i].onmouseout = function() {
			big1.src=sImgfirst.src;
		}
	}
	
	big1.addEventListener('mouseover', appear);
	big1.addEventListener('mouseout', disappear);


