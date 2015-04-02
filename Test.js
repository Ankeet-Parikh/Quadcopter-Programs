var arDrone = require('ar-drone');
var client = arDrone.createClient();
var util   = require('util');
var altitude;

client.takeoff();
client.on('navdata',function(data){

altitude = data.demo.altitudeMeters;
});
client
if(altitude <= 2.5){
	console.log("It is less than 2.5 somethings");
}
 else	{
	 console.log("It is higher than 2.5");
 }
 .after(3000,function(){
 this.stop();
 this.land();
 });
 
