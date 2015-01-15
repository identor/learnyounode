var http = require('http'),
    BufferList = require('bl');

var GetUrl = function(url) {
  this.url = url;
  this.get = function(finished) {
    var url = this.url;
    return http.get(this.url, function(response) {
      var bl = new BufferList(function(err, bufferData) {
        data = bufferData.toString();
        finished(err, data, url);
      });
      response.pipe(bl);
    });
  };
};

module.exports = GetUrl;

/* TEST
var geturl = new GetUrl(process.argv[2]);
geturl.get(function(err, data) {
  console.log(data);
});
*/
