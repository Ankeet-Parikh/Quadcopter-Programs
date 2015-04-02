var ardrone = require('ar-drone');
var client = ardrone.createClient();
client.on('navdata', null);

var land = function(){client.land();}
var takeoff = function(){client.takeoff();}
var stop = function() {client.stop();}
var functions = [takeoff, stop, land];
var i =0;
//functions[0]();
var d = [];

var loop = setInterval(

	function()
	{
		//functions[i%3]();
		console.log(navdata);
		d.push(navdata);
		i++;
		if(i == 3) clear();
	}

, 1000);


var clear = function()
{
	clearInterval(loop);
	console.log("complete");
	console.log(d);
}