var plotly = require('plotly')('ankeet.parikh96', '3581cdhngw');
var open = require('open');
var f = function(x) //x is a vector
{
	y = [];
	for(var i=0; i<x.length; i++)
	{
		y.push(x[i]*x[i]);
	}
	return y;
}

function DataSet(xpoints, ypoints, t)
{
	this.x = xpoints;
	this.y = f(this.x);
	type = t;
}


var trace = new DataSet([0,1,2,3,4,5], [], "scatter");

var graphOptions = {filename: "Basic Line", fileopt: "overwrite"};
plotly.plot(trace, graphOptions, function(err,msg){
	console.log(msg.url);
	open(msg.url);
});

