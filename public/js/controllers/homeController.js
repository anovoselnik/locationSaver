angular.module('HomeCtrl', ['LocationsService'])
.controller('HomeController', function( $scope, Location, $http ) {

	$scope.map = { center: { latitude: 20, longitude: 0 }, zoom: 2 };
	$scope.locations = [];

	//Initial load of saved locations
	Location.get().success(function(locations){
		$scope.locations = locations;
	});

	//searchbox event places_changed is triggered when user enters a query into the searchbox
	var searchBoxEvents = {	
    places_changed: function (searchBox) {
    	var locations = searchBox.getPlaces();
    	if(locations.length === 1){
    		saveLocation(locations[0]);
    	}
    }
  }
  //options for the searchbox
	$scope.searchbox = { template:'js/views/partials/locationSearchbox.html', events:searchBoxEvents};

	//this function first gets the timezone for the searched location and then it saves it to the server
	var saveLocation = function(location){

		var coordinates = {
			latitude: location.geometry.location.k,
			longitude: location.geometry.location.D
		}

		getLocationTimezone(coordinates).then(function(timezone){

			var newLocation = {
				coordinates: coordinates,
				name: location.name,
				timezone: timezone.data.timeZoneName
			};

			Location.create(newLocation).success(function(location){
				$scope.locations.push(location);
			});

		})
		
	}

	//this function queries the google maps timezone api and returns a $http object
	var getLocationTimezone = function(coordinates){
		var coordinatesString = coordinates.latitude + ',' + coordinates.longitude;
		return $http.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + coordinatesString+ '&timestamp=0')
	}

});