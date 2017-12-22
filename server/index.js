var express = require('express');
var bodyParser = require('body-parser');
var biz = require('../database-mongo');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/biz', function (req, res) {
  biz.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

