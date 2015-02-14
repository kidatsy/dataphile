var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// TUTORIAL - Connect to MongoDB
var mongo = require('mongodb');         // This sets up the connection to the mongo db
var monk = require('monk');
var db = monk('localhost:27017/dataphile');

var routes = require('./app/controllers/index');
var users = require('./app/controllers/users');

var cons = require('consolidate');
var app = express();

// view engine setup
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './app/views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TUTORIAL - Make our db accessible to our router
app.use(function(req,res,next){     // This makes the db accessible by all routes
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log('error');
    next(err);
});

// error handlers

if (app.get('env') === 'development') {
    app.use(require('express-stackman')());
}

/*  Default Express error handler. Using stackman for now, above

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

*/

module.exports = app;
