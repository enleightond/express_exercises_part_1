var express = require('express');

var app = express();

app.get('/express', function(req, res) {
    res.send("Hello, Express!" )
});

app.get('/david', function(req, res) {
    res.send("Hello, David"  )
});

app.listen(8000, function() {
    console.log("Listening on port 8000...");
});