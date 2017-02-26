const $ = require('jquery');
const moment = require('moment');
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');

$(function() {
	$('body').css({
		background: '#cc0'
	}).html(rightNow)
})