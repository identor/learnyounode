var http = require('http'),
    url = process.argv[2];

var logResponseData = function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
}

http.get(url, logResponseData);
