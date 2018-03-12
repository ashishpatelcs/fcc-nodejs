const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer(function(request, response) {
  var urlobj = url.parse(request.url, true);
  response.writeHead(200, { 'Content-Type': 'application/json' });

  if(request.method === 'GET' && urlobj.pathname == '/api/parsetime')
  {
	var key = urlobj.query['iso'];
        var newdate = new Date(key);
	var time = {};
	time.hour = newdate.getHours();
	time.minute = newdate.getMinutes();
	time.second = newdate.getSeconds();
	time = JSON.stringify(time);
	response.end(time);
  }
  if(request.method === 'GET' && urlobj.pathname == '/api/unixtime')
  {
	var key = urlobj.query['iso'];
	var newdate = new Date(key);
	var time = {};
	time.unixtime = newdate.getTime();
	time = JSON.stringify(time);
	response.end(time);  
  }
});

server.listen(process.argv[2]);
