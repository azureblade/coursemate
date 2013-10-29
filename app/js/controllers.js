function NavigationCtrl($scope) {
	$scope.nav = [
		{
			Name: "Home",
			Url: "#/",
			Icon: "fa fa-home"
		},
		{
			Name: "Calendar",
			Url: "#/calendar",
			Icon: "fa fa-calendar"
		},
		{
			Name: "Courses",
			Url: "#/courses",
			Icon: "fa fa-book"
		},
		{
			Name: "Friends",
			Url: "#/friends",
			Icon: "fa fa-user"
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
		$scope.Course = data[$routeParams.ID.replace(' ', '')];
		// for (var i = 0; i < data.length; i++) {
		// 	if (data[i].ID === $routeParams.ID) {
		// 		$scope.Course = data[i];
		// 		return;
		// 	}
		// }
	});
}

function FriendListCtrl($scope, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		$scope.friends = data;
	});
}

function FriendProfileCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		$scope.Friend = data[$routeParams.Username];
		// for (var i = 0; i < data.length; i++) {
		// 	if (data[i].Username === $routeParams.Username) {
		// 		$scope.Friend = data[i];
		// 		return;
		// 	}
		// }
	});
}