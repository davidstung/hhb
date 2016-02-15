var fs = require("fs");
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger());

var htmlfile = "index.html";

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString('utf8');
  response.send("html");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
