var request = require('request');
var parser = require('body-parser');
var config = require('../config.js');
var request = require('request');

var yelpGetter = function(term) {
  var options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=' + term + '&location=11222&limit=9&sort_by=distance&open_now=true',
    headers: {
      'Authorization': `Bearer ${config.KEY}`
    }
  }  

  request(options, function(err, req, body) {
    console.log(JSON.parse(body))

  })

}

module.exports.yelpGetter = yelpGetter;