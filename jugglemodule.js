module.exports = function(url, n, callback) {
  const bl = require('bl');
  const http = require('http');
  
  http.get(url, ProcessData);

  function ProcessData(response) {
	response.pipe(bl(function(err, data) {
		if(err) callback(err);
		else { callback(null, data, n);
		}
	}));	
  }
}
