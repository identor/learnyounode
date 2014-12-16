var fs = require('fs'),
    path = require('path');

var filterFiles = function(files, ext) {
  if (ext == '') {
    return files;
  }
  var hasExtension = function(element) {
    return path.extname(element) == '.'+ext
  };
  return files.filter(hasExtension);
};

var filterDirectory = function(directory, ext, cb) {
  fs.readdir(directory, function(err, files) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, filterFiles(files, ext));
    }
  });
};

module.exports = filterDirectory;

/** TEST
filterDirectory('/home/irvin', 'old', function(err, data) {
  data.forEach(function(file) {
    console.log(file);
  });
});
*/
