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
			controller: 'CourseListCtrl',
			templateUrl: 'partials/courses.html'
		})
		.when('/courses/:ID', {
			controller: 'CourseDetailCtrl',
			templateUrl: 'partials/course-detail.html'
		})
		.when('/friends', {
			controller: 'FriendListCtrl',
			templateUrl: 'partials/friends.html'
		})
		.when('/friends/:Username', {
			controller: 'FriendProfileCtrl',
			templateUrl: 'partials/profile.html'
		})
		.otherwise({ redirectTo: '/' });
});

// App.run(function() {
	
// });