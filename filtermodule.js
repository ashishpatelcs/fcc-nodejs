module.exports = function(dirpath, ext, callback) {
  const fs = require('fs');
  const path = require('path');
  var filteredlist = [];
  fs.readdir(dirpath, FilterLS);
  function FilterLS(err, list) {
    if(err) return callback(err);
    else {
	for (var i = 0; i < list.length; i++) {
		if(path.extname(list[i])==("."+ext)) {
		  filteredlist.push(list[i]);
		}
	}
	return callback(null, filteredlist);
    }
  }
}
