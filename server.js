var express = require('express');
var app = express();

// app.use('*', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);