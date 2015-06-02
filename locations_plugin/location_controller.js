var Location = require('./location_model').Location;

exports.getAll = {
	handler: function(request, reply) {
		Location.find({}, function(err, locations) {
			if (!err) {
				reply(locations);
			} else {
				reply(new Error('Error')); // 500 error
			}
		});
	}
};

exports.getOne = {
	handler: function(request, reply) {
		Location.findOne({
			'_id': request.params.locationId
		}, function(err, location) {
			if (!err) {
				reply(location);
			} else {
				reply(new Error('Error'));
			}
		});
	}
};

exports.create = {
	handler: function(request, reply) {
		var location = new Location(request.payload);
		location.save(function(err, location) {
			if (!err) {
				reply(location); // HTTP 201
			} else {
				reply(new Error('Error'));
			}
		});
	}
};

exports.update = {
	handler: function(request, reply) {
		Location.findOne({
			'_id': request.params.locationId
		}, function(err, location) {
			if (!err) {
				location.name = request.payload.name;
				location.save(function(err, location) {
					if (!err) {
						reply(location); // HTTP 201
					} else {
						reply(new Error('Error'));
					}
				});
			} else {
				reply(new Error('Error'));
			}
		});
	}
};

exports.remove = {
	handler: function(request, reply) {
		Location.findOne({
			'_id': request.params.locationId
		}, function(err, location) {
			if (!err && location) {
				location.remove();
				reply({
					message: "Location deleted successfully"
				});
			} else {
				reply(new Error('Error'));
			}
		});
	}
};