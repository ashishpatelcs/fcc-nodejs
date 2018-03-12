const FilterLS = require('./filtermodule');

function PrintList(err, list) {
	if(err) console.log("File System Read Error!");
	else {
		list.forEach(function(filename) {
			console.log(filename);
		});
	}
}

FilterLS(process.argv[2], process.argv[3], PrintList);
