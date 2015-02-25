module.exports = function() {
  
  this.mongoose = require('mongoose');
  this.mongoose.connect(this.set('db-uri'));
  this.mongooseTypes = require("mongoose-types");
  this.mongooseTypes.loadTypes(this.mongoose);

/*
  switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://localhost/dataphile-dev');
      break;
    case 'production':
      mongoose.connect('mongodb://localhost/dataphile-prod');
      break;
  }

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    var models = require(__dirname + '/../../app/models/models');
    var bar = new models.Foo({ name: 'foobar!' });
    bar.save(function (err, bar) {
        if (err) return console.error(err);
        console.log(bar.name + ' saved to db!');
    });
  });
*/

}
