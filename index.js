var express = require('express');
var app = express();

app.use(express.static('./public'));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});