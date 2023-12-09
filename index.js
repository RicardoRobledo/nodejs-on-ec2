var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud'); //write a response to the client
  res.end();
}).listen(4000);
