var request = require('request');
var parser = require('body-parser');
var config = require('../config.js');

var yelpGetter = function(term, lat, long) {
  var options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=' + term + '&latitude=' + lat + '&longitude=' + long + '&open_now=true&limit=9&sort_by=distance',
    headers: {
      'Authorization': `Bearer ${config.KEY}`
    }
  }  

  request(options, function(err, req, body) {


})

}

