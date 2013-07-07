var express = require('express');


var app = express.createServer(express.logger());


var fs=require('fs');


var bf=new Buffer(256);
var buf=fs.readFileSync('index.html');
var index=buf.toString('utf8');

app.get('/', function(request, response) {
  response.send(index)});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
