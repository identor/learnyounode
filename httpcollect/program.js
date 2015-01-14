var http = require('http'),
    BufferList = require('bl'),
    url = process.argv[2];

var logSummary = function(charsReceived, data) {
  console.log(charsReceived);
  console.log(data);
};

var summarizeData = function(err, data) {
  if (err) {
    return console.error(err);
  }
  var stringyfiedData = data.toString('utf8');
  logSummary(stringyfiedData.length, stringyfiedData);
};

var pipeToBuffer = function(response) {
  var bl = new BufferList(summarizeData);
  response.pipe(bl);
};

http.get(url, pipeToBuffer);
