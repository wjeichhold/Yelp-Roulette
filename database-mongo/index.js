var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/biz');

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
  bizUrl: {type: String, unique: true, required: true},
  }, {timestamps: {createdAt: 'created_at'}}
);

var Biz = mongoose.model('Biz', bizSchema);

var selectAll = function(callback) {
  Biz.find({}).sort('-date').limit(9).exec(function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var saver = function(data) {
  // console.log(data)
  var saveIt = new Biz(data)
  saveIt.save(function(err) {
    if (err) {
    return err
    }
  console.log('saved!')
  })


}

module.exports.selectAll = selectAll;
module.exports.saver = saver;
module.exports.db = db;