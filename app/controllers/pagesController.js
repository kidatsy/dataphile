var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var Account = require('../models/account');

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.render();
}

pagesController.add = function() {
  this.title = 'Adding user';

    var account = new Account();
    console.log("shit");
    account.email = 'asasdf@ase.com';
    account.name.first = 'werwerwer';
    account.name.last = 'werwerwervrwaese';

    var self = this;
    account.save(function (err) {
    if (err) {
        console.log('failure!');       
    }
        console.log('success!');
    });

  this.render();
}

module.exports = pagesController;
