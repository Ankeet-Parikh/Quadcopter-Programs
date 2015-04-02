var ardrone = require('ar-drone');
var client = ardrone.createClient();
client.on('navdata', console.log);
client.takeoff()
// access the head camera
client.config('video:video_channel', 0);

// access the bottom camera
client.config('video:video_channel', 3);

client.after(3000, function() {this.stop();      })
	.after(2000, function() {this.front(0.5);    })
	.after(1000, function() {this.stop();        })
	.after(1000, function() {this.clockwise(0.5) })
	.after(2000, function() {this.stop()         })
	.after(1000, function() {this.front(0.5)     })
	.after(1000, function() {this.stop()         })
	.after(2000, function() {this.land();        });