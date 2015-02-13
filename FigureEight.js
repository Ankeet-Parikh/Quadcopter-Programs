var ardrone = require('ar-drone');
var client = ardrone.createClient();
client.takeoff();
client
	.after(3000,function(){
	this.clockwise(.7);
	this.front(.7);
	})
	.after(3000,function(){
	this.front(.7)})
	.after(3000,fucntion(){
	this.clockwise(.7);
	this.front(.7);
	})
	.after(3000,function(){
		this.front(.7);
	})
	.after(3000,function(){
		this.stop();
		this.land();
		})