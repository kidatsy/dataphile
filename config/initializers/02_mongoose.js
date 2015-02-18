module.exports = function() {
  // Any files in this directory will be `require()`'ed when the application
  // starts, and the exported function will be invoked with a `this` context of
  // the application itself.  Initializers are used to connect to databases and
  // message queues, and configure sub-systems such as authentication.

  // Async initializers are declared by exporting `function(done) { /*...*/ }`.
  // `done` is a callback which must be invoked when the initializer is
  // finished.  Initializers are invoked sequentially, ensuring that the
  // previous one has completed before the next one executes.
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
