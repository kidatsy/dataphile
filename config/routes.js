// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
var form = require('express-form');
var field = form.field;

module.exports = function routes() {
    this.root('pages#main');
    this.namespace('api', function() {
        this.namespace('accounts', function() {
            this.match('register', 'accounts#register');
            this.post('save', 'accounts#save');
            this.post('edit', 'accounts#edit');
            this.match('all', 'accounts#all');
            this.match('show/:id', 'accounts#show');
        });
        //this.resources('accounts');
    });
    //this.post('accounts/add', 'accounts#add', { via: 'post'});
}
