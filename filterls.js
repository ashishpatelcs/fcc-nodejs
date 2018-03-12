const fs = require('fs');
const path = require('path');
var dir = fs.readdir(process.argv[2], FilterLS);

function FilterLS(err, list) {
  if(!err) {	
	for (var i = 0; i < list.length; i++) {
		if (path.extname(list[i])==("."+process.argv[3]))
			console.log(list[i]);
	}
  }
}
