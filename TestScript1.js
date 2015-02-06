var ardrone = require('ar-drone');
var client = ardrone.createClient();
var animations = ['blinkGreenRed', 'blinkGreen', 'blinkRed', 'blinkOrange', 'snakeGreenRed',
'fire', 'standard', 'red', 'green', 'redSnake', 'blank', 'rightMissile',
'leftMissile', 'doubleMissile', 'frontLeftGreenOthersRed',
'frontRightGreenOthersRed', 'rearRightGreenOthersRed',
'rearLeftGreenOthersRed', 'leftGreenRightRed', 'leftRedRightGreen',
'blinkStandard'];


client.takeoff();

client 

	.after(3000, function() {	
		this.clockwise(0.5);
		//var rand = parseInt(Math.random()*animations.length);
		//this.animateLeds(animations[3],10 ,3 );
	})
	
	.after(10000, function() {
	this.down(0.9);
	this.land();
	});