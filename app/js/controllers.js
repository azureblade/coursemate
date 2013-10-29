function CalendarCtrl($scope) {

}

function CoursesCtrl($scope) {

}

function FriendListCtrl($scope) {
	$scope.friends = [
		{
			Username: "wrecking_ball",
			Name: "Miley Cyrus",
			School: "Twerk U"
		},
		{
			Username: "holy_angel",
			Name: "Misha Collins",
			School: "Divine Academy"
		},
		{
			Username: "bbatch",
			Name: "Benedict Cumberbatch",
			School: "Starfleet"
		}
	];
}

function FriendProfileCtrl($scope, $routeParams) {
	$scope.Username = $routeParams.Username;
}