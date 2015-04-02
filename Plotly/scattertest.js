var plotly = require('plotly')('ankeet.parikh96','3581cdhngw');
var trace1 = {
  x: [1, 2, 3, 4], 
  y: [10, 15, 13, 17], 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [16, 5, 11, 9], 
  type: "scatter"
};
var data = [trace1, trace2];
var graphOptions = {filename: "basic-line", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});