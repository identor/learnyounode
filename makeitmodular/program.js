var filterdir = require('./filterdir.js'),
    dir = process.argv[2],
    ext = process.argv[3];

var logFiles = function(err, files) {
  files.forEach(function(file) {
    console.log(file);
  });
};

filterdir(dir, ext, logFiles);
