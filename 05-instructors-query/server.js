var express = require('express');

var data = require('./data.js');
var app  = express();

var instructors = [
  {givenname: "Cho", surname: "Kim", sex: "male"},
  {givenname: "Liz", surname: "Howard", sex: "female"},
  {givenname: "Rosa", surname: "Choi", sex: "female"},
  {givenname: "Zubair", surname: "Desai", sex: "male"},
  {givenname: "Tyler", surname: "Bettilyon", sex: "male"}
];

app.get('/', function(req, res) {
  // write code.
});

app.listen(8000, function() {
	console.log("I'm listening on port 8000...");
});
