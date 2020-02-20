var fs = require('fs');

var filedata = fs.readFileSync('inputfile1.txt');
console.log(filedata.toString());
console.log('end');
