var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var listening = app.listen(1337, function(){
  console.log("Express server listening on port 1337");
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/validator/palindrome', function(req, res) {
  var word = req.body;
  var isPalindrome = word.palindrome.replace(/\s/g,'') == word.palindrome.split('').reverse().join('').replace(/\s/g,'');
  if(isPalindrome){
    res.status(200).send({});
  }else{
    res.status(400).send({});
  }
});
