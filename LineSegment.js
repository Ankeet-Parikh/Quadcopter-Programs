var ardrone = require('ar-drone');
var client = ardrone.createClient();

client.takeoff()
	
client.after(2000, function() {this.stop();     })
	.after(1000, function() {this.front(0.7); })
	.after(3000, function() {this.stop();     })
<<<<<<< HEAD
	.after(3000, function() {this.front(0.7); })
	.after(3000, function() {this.stop();     })
	.after(3000, function() {this.land();     });
	//Creates data log
	client.on('navdata', console.log);
=======
	.after(2000, function() {this.land();     });
>>>>>>> origin/master
