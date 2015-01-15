var http = require('http'),
    BufferList = require('bl'),
    GetUrl = require('./geturl.js'),
    cursor = 0,
    queue = [],
    urls = process.argv.slice(-3);

var logData = function(index, data) {
  if (data && cursor == index) {
    console.log(data);
    ++cursor;
    return logData(cursor, queue[cursor]);
  } else {
    queue[index] = data;
    return;
  }
};

for (var i = 0; i < urls.length; i++) {
  var geturl = new GetUrl(urls[i]);
  var url = geturl.get(function(err, data, url) {
    if (err) {
      console.error(err);
    }
    logData(urls.indexOf(url), data);
  });
}
