var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var Account = require('../models/account');

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.render();
  // eventually redirect to FrontEnd/front
  // or just leave as is, building in space for ember to do its thing?
}

module.exports = pagesController;
