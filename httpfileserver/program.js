var http = require('http'),
    port = process.argv[2],
    file = process.argv[3],
    fs = require('fs');

var httpServer = http.createServer();
httpServer.on('request', function(req, res) {
  var fileStream = fs.createReadStream(file);
  fileStream.pipe(res);
});
httpServer.listen(port);
