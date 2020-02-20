var fs = require('fs');

fs.readFile('inputFile1.txt', (err, data) =>
  {
    if (err) return console.error(err);
    console.log(data.toString());
  }
);
console.log('This is the end');
