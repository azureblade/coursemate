"use strict";

var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: '',
			templateUrl: 'partials/home.html'
		})
		.otherwise({ redirectTo: '/' });
});