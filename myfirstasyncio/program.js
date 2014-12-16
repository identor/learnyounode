var fs = require('fs');

var lineCount = function (err, buffer) {
  console.log(buffer.toString().split('\n').length - 1);
};
var buff = fs.readFile(process.argv[2], lineCount);
