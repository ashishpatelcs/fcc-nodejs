var fs = require('fs');
var file = fs.readFile(process.argv[2], 'utf8', NewlineCount);

function NewlineCount(err, file) {
	if (err) {
		console.log('File System Read Failed!');
	} else {
		console.log(file.split('\n').length-1);

	}
}
