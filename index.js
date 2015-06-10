var HTMLing = require("htmling");

var templates = HTMLing.dir(__dirname + "/views");

var http = require("http");
var users = require(__dirname + "/data.json");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(templates.render("users/index.html", users));
}).listen(3003, '127.0.0.1');
