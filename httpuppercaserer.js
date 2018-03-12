const http = require('http');
const fs = require('fs');
const map = require('through2-map');


var server = http.createServer(function(request, response) {
  if (request.method === 'POST') {
    request.pipe(map(function (data) {
    	  return data.toString().toUpperCase()
    })).pipe(response);
  }
});

server.listen(process.argv[2]);
