// Model modeled after https://github.com/kuryaki/locomotive-example/blob/master/app/models/account.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Email = mongoose.SchemaTypes.Email;

var AccountSchema = new Schema({
    email: { type: Email, unique: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    }
});

module.exports = mongoose.model('Account', AccountSchema);