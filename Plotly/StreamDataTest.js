var plotly = require('plotly')('ankeet.parikh96','3581cdhngw');
var open = require('open');
var DataSet = function(xpoints,ypoints, type)
{
	this.x = xpoints;
	this.y = ypoints;
	this.type = type;
}
var f = function(x)
{
	return x*x;
}
x = [];
y = [];
type = "scatter";
var graphOptions = {filename: "Quadratic", fileopt: "overwrite"};
for(var i=0; i<5; i++)
{
	x.push(i);
	y.push(f(i));
	var c = new DataSet(x,y,type);
	plotly.plot(c,graphOptions, function(err, msg){
		open(msg.url);
	})
}