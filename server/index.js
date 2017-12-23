var express = require('express');
var bodyParser = require('body-parser');
var bizDb = require('../database-mongo');
var helper = require('../helpers/yelp.js');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/biz', function(req, res) {
  console.log(req.body)
  helper.yelpGetter(req.body.searchTerm, req.body.long, req.body.lat, (arg) => {
    res.sendStatus(200)    
    res.end(arg)
    })
  
  
})

app.get('/biz', function (req, res) {
  bizDb.selectAll(function(err, data) {
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

