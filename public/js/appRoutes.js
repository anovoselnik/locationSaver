angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'js/views/home.html',
		controller: 'HomeController'
	})

	$locationProvider.html5Mode(true);

}]);