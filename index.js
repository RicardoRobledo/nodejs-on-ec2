var http = require('http');


http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud');
  res.end();
}).listen(4000);
