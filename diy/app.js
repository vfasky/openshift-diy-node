var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.OPENSHIFT_INTERNAL_PORT || 1337, process.env.OPENSHIFT_INTERNAL_IP || '127.0.0.1');
