angular.module('propellioTest', 
[
	'ngRoute', 
	'appRoutes', 
	'HomeCtrl', 
	'LocationsService',
	'uiGmapgoogle-maps'
])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      v: '3.17',
      libraries: 'places' // Required for SearchBox.
    });
});