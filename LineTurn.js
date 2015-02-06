var ardrone = require('ar-drone');
var client = ardrone.createClient();
client.on('navdata', console.log);
client.takeoff()
	
client.after(2000, function() {this.stop();      })
	.after(1000, function() {this.front(0.7);    })
	.after(3000, function() {this.stop();        })
	.after(2000, function() {this.land();        });