"use strict";

var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: '',
			templateUrl: 'partials/splash.html'
		})
		.when('/login', {
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})
		.when('/logout', {
			controller: 'LogoutCtrl',
			templateUrl: 'partials/logout.html'
		})
		.when('/profile', {
			controller: 'ProfileCtrl',
			templateUrl: 'partials/profile.html'
		})
		.when('/calendar', {
			controller: 'CalendarCtrl',
			templateUrl: 'partials/calendar.html'
		})
		.when('/calendar/:Year/:Month/:Day', {
			controller: 'CalendarDetailCtrl',
			templateUrl: 'partials/calendar-detail.html'
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
			templateUrl: 'partials/friend-profile.html'
		})
		.otherwise({ redirectTo: '/login' });
});