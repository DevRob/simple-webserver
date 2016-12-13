const http = require('http');
const handlers = require('./handlers');

var server = http.createServer(function(req , res) {
  var url = req.url;

  if (url === "/") {
    handlers.homepage(req, res);
  } else if (url === "/profile") {
    handlers.profile(req, res);
  } else {
    handlers.notFound(req, res);
  }
});

server.listen(3033);
