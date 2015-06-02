angular.module('LocationsService', [])
.factory('Location', ['$http', function( $http ) {

	return {
		get : function() {
				return $http.get('/locations');
		},

		create : function(locationData) {
				return $http.post('/locations', locationData);
		},

		update : function(locationData) {
				return $http.put('/locations/' + locationData._id, locationData);
		},

		delete : function(id) {
				return $http.delete('/locations/' + id);
		}
	}       

}]);