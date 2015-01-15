var net = require('net'),
    port = process.argv[2],
    sprintf = require('sprintf-js').sprintf;

var server = net.createServer();
server.on('connection', function(socket) {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var dateString = sprintf('%4d-%02d-%02d %02d:%02d', year, month, day, hour, minutes);
  socket.end(dateString + '\r\n');
});
server.listen(port);
