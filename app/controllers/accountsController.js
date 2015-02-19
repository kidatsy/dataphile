var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var Account = require('../models/account');

var accountsController = new Controller();

accountsController.index = function() {
    this.title = 'All current users';
    var self = this;
    Account.find().exec(function (err, docs) {
        if (err) {
            self.render('error', { message: err.message });
        } else {
            self.accounts = docs;
            self.render();
        }
    });

}

accountsController.create = function() {
    var values = this.req.body;
    console.log(values);

    var account = new Account();
    account.email = values.email;
    account.name.first = values.first_name;
    account.name.last = values.last_name;
    var self = this;
    account.save(function (err) {
        if (err) {
            console.log('failure!');
            self.redirect('/accounts/register');      
        } else {
            console.log('success!');
            self.redirect('/');
        }
    });
},

accountsController.register = function() {
    this.title = 'Register yourself!';
    this.render();
}

module.exports = accountsController;
