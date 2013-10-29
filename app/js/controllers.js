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

function CoursesCtrl($scope) {

}

function FriendListCtrl($scope, $http) {
	$http.get('./friends.json').success(function(data) {
		$scope.friends = data;
	});
}

function FriendProfileCtrl($scope, $routeParams, $http) {
	$scope.Username = $routeParams.Username;

	$http.get('./friends.json').success(function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].Username === $routeParams.Username) {
				$scope.Friend = data[i];
				return;
			}
		}
	});
}