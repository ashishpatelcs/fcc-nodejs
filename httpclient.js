const http = require('http');

http.get(process.argv[2], PrintData);

function PrintData(response) {
	response.setEncoding('utf8');
	response.on('data', function(dat) {
	  console.log(dat);
	});
}
