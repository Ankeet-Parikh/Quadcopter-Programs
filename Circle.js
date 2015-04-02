var ardrone = require('ar-drone');
var client = ardrone.createClient();
client.on('navdata', console.log);
client.takeoff();
client
	.after(3000, function(){
		this.up(0.7);
	})
	.after(3000,function(){
		this.stop()
	})
	.after(2000,function(){
		
		this.clockwise(0.8);
		this.front(0.3);
	})
	.after(10000,function(){
		//this.stop();
		this.land();
	});