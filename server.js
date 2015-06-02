var Hapi = require('hapi'),
    Db = require('./database');

var server = new Hapi.Server();
var port = process.env.PORT || 8080;

server.connection({ port, '0.0.0.0' });

server.route([
	{
	  method: 'GET',
	  path: '/{path*}',
	  handler: {
	    directory :{
	        path : './public',
	        index: true
	    }
	  }
	},
	{
		method: 'GET',
		path: '/',
		handler: function(request, reply){
			reply.file('./public/index.html');
		}
	}
]);

server.register({ 
  register: require('./locations_plugin/locations_plugin')
}, function (err) {

  if (err) {
    throw(err);
  }

  server.start();

});