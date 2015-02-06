var ardrone = require('ar-drone');
var client = ardrone.createClient();
var animations = ['blinkGreenRed', 'blinkGreen', 'blinkRed', 'blinkOrange', 'snakeGreenRed',
'fire', 'standard', 'red', 'green', 'redSnake', 'blank', 'rightMissile',
'leftMissile', 'doubleMissile', 'frontLeftGreenOthersRed',
'frontRightGreenOthersRed', 'rearRightGreenOthersRed',
'rearLeftGreenOthersRed', 'leftGreenRightRed', 'leftRedRightGreen',
'blinkStandard'];

client.takeOff()
	
	client.after(3000, function() {
		var rand = parseInt(Math.random() * animations.length);
	  	this.animateLeds(animations[rand], 10, 5);
	 })
	 .after(3000, function() {
	 	this.land();
	 });