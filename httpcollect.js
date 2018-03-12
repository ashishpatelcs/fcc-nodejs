const bl = require('bl');
const http = require('http');

http.get(process.argv[2], PrintData);

function PrintData(response) {
  response.pipe(bl(function(err, data) {
	if(err) console.log("HTTP request failed!");
	else {
		console.log(data.length);
		console.log(data.toString());
	     }
  }));
}
