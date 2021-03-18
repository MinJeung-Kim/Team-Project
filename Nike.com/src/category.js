'use strict';

const menuClick = function(){
	$.ajax({
		type: 'GET', //or POST
		url: './category-w.html',
        dataType: 'html',
		success: function(data) {
			$('.right-content-wrap').html('');
            $('.right-content-wrap').append(data);
		}, 
        error: function(error) {
			alert(error);
		}
	});
};