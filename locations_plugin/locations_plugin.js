var locationRoutes = require('./location_routes');

var locationsPlugin = {
  register: function (server, options, next) {
    
    server.route(locationRoutes.endpoints);

    next();

  }
}
 
locationsPlugin.register.attributes = {
  name: 'locationsPlugin',
  version: '1.0.0'
};

module.exports = locationsPlugin;