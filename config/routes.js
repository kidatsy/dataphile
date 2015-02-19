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
    this.match('accounts/register', 'accounts#register');
    this.resources('accounts');
    //this.post('accounts/add', 'accounts#add', { via: 'post'});
}
