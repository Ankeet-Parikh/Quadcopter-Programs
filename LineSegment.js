var ardrone = require('ar-drone');
var client = ardrone.createClient();

client.takeoff()
	
	.after(3000, function() {this.stop();     })
	.after(3000, function() {this.front(0.7); })
	.after(3000, function() {this.stop();     })
	.after(3000, function() {this.land();     });
	//Creates data log
	client.on('navdata', console.log);