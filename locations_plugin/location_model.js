var Mongoose = require('mongoose'),
		Schema = Mongoose.Schema;

var LocationSchema = new Schema({
	name: { type: String, required: true },
	coordinates: { 
		latitude: { type: String, required: true },
		longitude: { type: String, required: true }
	},
	timezone: {type: String, required: true }
});

var location = Mongoose.model('location', LocationSchema);

module.exports = {
	Location: location
};