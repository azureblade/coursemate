function CalendarCtrl($scope) {

}

function CoursesCtrl($scope) {

}

function FriendListCtrl($scope, $http) {
	$http.get('./friends.json').success(function(data) {
		$scope.friends = data;
	});
	// $scope.friends = [
	// 	{
	// 		Username: "wrecking_ball",
	// 		Name: "Miley Cyrus",
	// 		School: "Twerk U"
	// 	},
	// 	{
	// 		Username: "holy_angel",
	// 		Name: "Misha Collins",
	// 		School: "Divine Academy"
	// 	},
	// 	{
	// 		Username: "bbatch",
	// 		Name: "Benedict Cumberbatch",
	// 		School: "Starfleet"
	// 	}
	// ];
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