const $ = require('jquery');

$(function() {
	$('body').css({
		background: '#ccc'
	})
	$(document).on('click', function() {
		$(this).children().css({
			background: '#396'
		})
	});
})