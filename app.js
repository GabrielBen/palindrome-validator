var express = require('express');
var app = express();
var palindrome = require('./api/routes/palindrome.js');

app.use(express.static('app'));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/api/", function(req, res) {
    res.status(400).send("Valid routes: /palindrome/foo");
});

app.get('/api/palindrome', palindrome.noParam);
app.get('/api/palindrome/:text', palindrome.validate);

var listening = app.listen(1337, function(){
  console.log("Server listening on port 1337");
});
