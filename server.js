var express = require('express');
var app = express();



app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + '/style.css');
});

app.get('/skype-bg.png', function(req, res) {
  res.sendFile(__dirname + '/skype-bg.png');
});

app.use('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


// app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);