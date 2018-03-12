const fs = require('fs');
const http = require('http');

var server = http.createServer(callback);
var filestream = fs.createReadStream(process.argv[3]);

function callback (request, response) {
  filestream.pipe(response);
}

server.listen(process.argv[2]);
