function NavigationCtrl($scope) {
	$scope.nav = [
		{
			Name: "Home",
			Url: "#/"
		},
		{
			Name: "Calendar",
			Url: "#/calendar"
		},
		{
			Name: "Courses",
			Url: "#/courses"
		},
		{
			Name: "Friends",
			Url: "#/friends"
		}
	];
}

function CalendarCtrl($scope) {

}

function CourseListCtrl($scope, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		$scope.courses = data;
	});
}

function CourseDetailCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].ID === $routeParams.ID) {
				$scope.Course = data[i];
				return;
			}
		}
	});
}

function FriendListCtrl($scope, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		$scope.friends = data;
	});
}

function FriendProfileCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].Username === $routeParams.Username) {
				$scope.Friend = data[i];
				return;
			}
		}
	});
}