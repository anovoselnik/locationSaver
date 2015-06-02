var Mongoose = require('mongoose');

Mongoose.connect('mongodb://propellio_test:13121312@ds043082.mongolab.com:43082/propellio_test');

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;

exports.db = db;