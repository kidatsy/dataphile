var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/users', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,users){
        res.render('users', {
            title: 'Users',
            users: users,
        });
    });
});

/* TUTORIAL
router.get('/users', function(req, res) {       // Setting the route here
    var db = req.db;                            // Getting the db, defined in app.js
    var collection = db.get('usercollection');  // Getting the collection from the db
    collection.find({},{},function(e,docs){     // Pulling data from the db
        res.render('users', {                   // Render it in the users template
            "users" : docs                      // with the data loaded in the users array
        });
    });
});
*/

module.exports = router;
