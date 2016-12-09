'use strict';

angular.module('bwApp').config(
	function ($routeProvider, $locationProvider, $httpProvider) {

		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', 		{templateUrl: 'partials/landing.html', controller: 'LandingController'})

		.when('/404', 	{templateUrl: 'partials/missing-page.html', controller: ''})
		.otherwise('/');
});