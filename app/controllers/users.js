var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,users){
        res.render('users', {
            title: 'Users',
            users: users,
        });
    });
});

module.exports = router;
