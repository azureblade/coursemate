"use strict";

var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: '',
			templateUrl: 'partials/splash.html'
		})
		.when('/calendar', {
			controller: 'CalendarCtrl',
			templateUrl: 'partials/calendar.html'
		})
		.otherwise({ redirectTo: '/' });
});