var connectTo = 'mongodb://<wjeichhold>:<hackreactor>@ds163656.mlab.com:63656/heroku_5k9x46hj'

var mongoose = require('mongoose');
mongoose.connect(connectTo, {useMongoClient: true});

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
  Biz.find({}).sort({created_at: -1}).limit(9).exec(function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var saver = function(data) {
  var saveIt = new Biz(data)
  saveIt.save(function(err) {
    if (err) {
    return err
    }
  })


}

module.exports.selectAll = selectAll;
module.exports.saver = saver;
module.exports.db = db;