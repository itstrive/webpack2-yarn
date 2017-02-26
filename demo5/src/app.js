'use strict'
const moment = require('moment');
const $ = require('jquery');

var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');

$(function() {
	function time() {
		rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
		$('body').html(rightNow);
	}
	time();
	setInterval(time, 1000);
})