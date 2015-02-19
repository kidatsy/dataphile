var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var Account = require('../models/account');

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.render();
}

module.exports = pagesController;
