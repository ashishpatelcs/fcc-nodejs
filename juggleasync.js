const bl = require('bl');
const http = require('http');
const JuggleModule = require('./jugglemodule');

var result=[];
var count=0;

var i = 0;
while (i < 3)
{
  JuggleModule(process.argv[i+2], i, FetchData);
  i++;
}

function FetchData(err, data, n) {
  	if(err) console.log("HTTP Request Failed!");
	else {
	  result[n]=data.toString();
	  count++;
	  if(count==3) Print();
	}
}

function Print() {
  var i = 0;
  while(i < 3) {
	console.log(result[i]);
	i++;
  }
}
