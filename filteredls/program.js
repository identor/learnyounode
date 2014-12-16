var path = require('path'),
    fs = require('fs'),
    dir = process.argv[2],
    ext = process.argv[3];

var listFiles = function (err, files) {
  for (var i = 0; i < files.length; i++) {
    if (path.extname(files[i]) == '.'+ext) {
      console.log(files[i]);
    }
  }
};

var buff = fs.readdir(dir, listFiles);
