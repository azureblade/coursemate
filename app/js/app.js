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
		.when('/courses', {
			controller: 'CoursesCtrl',
			templateUrl: 'partials/courses.html'
		})
		.when('/friends', {
			controller: 'FriendsCtrl',
			templateUrl: 'partials/friends.html'
		})
		.otherwise({ redirectTo: '/' });
});