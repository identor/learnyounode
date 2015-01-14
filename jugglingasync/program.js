var http = require('http'),
    BufferList = require('bl'),
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
  var bl = new BufferList(function(err, data) {
    if (err) {
      console.error(err);
    }
    data = data.toString();
    logData(i, data);
  });
  console.log(index);
  http.get(urls[i], function(response) {
    response.pipe(bl);
  });
}
