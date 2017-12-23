var request = require('request');
var parser = require('body-parser');
var config = require('../config.js');
var request = require('request');
var saver = require('../database-mongo/index.js');

var yelpGetter = function(term) {
  var options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=' + term + '&location=11222&limit=9&sort_by=distance&open_now=true',
    headers: {
      'Authorization': `Bearer ${config.KEY}`
    }
  }  

  request(options, function(err, req, body) {
    var body = JSON.parse(body);
    for (var i = 0; i < body.businesses.length; i++) {
      var newObj = {
        pictureUrl: body.businesses[i].image_url,
        bizName: body.businesses[i].name,
        bizUrl: body.businesses[i].url
      }
      saver.saver(newObj);
    }
  })

}

module.exports.yelpGetter = yelpGetter;