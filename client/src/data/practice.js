var fs = require('fs');
var obj = 'star';
fs.readFile('./pande.json', 'utf8', function (err, data) {
	if (err) throw err;
	obj = JSON.parse(data);
	console.log(obj);
});
