var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var bizSchema = mongoose.Schema({
  pictureUrl: String,
  bizName: String,
  bizUrl: {
    type: String,
    unique: true
  }
});

var Biz = mongoose.model('Biz', bizSchema);

var selectAll = function(callback) {
  Biz.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var saver = function(data, callback) {


}

module.exports.selectAll = selectAll;