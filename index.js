var http = require('http');

http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud 4');
  res.end();
}).listen(4000);
