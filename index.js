var fs = require ('fs')
var express = require('express')
//var logger = require('morgan')
var app = express()
//app.use(logger());


var htmlfile = "index.html"

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString()
    response.send(html)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
