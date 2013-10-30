function NavigationCtrl($scope, $location) {
	$scope.nav = [
		{
			Name: "Home",
			Url: "#",
			Icon: "fa fa-home"
		},
		{
			Name: "Calendar",
			Url: "calendar",
			Icon: "fa fa-calendar"
		},
		{
			Name: "Courses",
			Url: "courses",
			Icon: "fa fa-book"
		},
		{
			Name: "Friends",
			Url: "friends",
			Icon: "fa fa-user"
		}
	];

	$scope.click = function(e) {
		var elem = angular.element(e.srcElement);
		console.log(elem.prop('id'));
		$location.path('/' + elem.prop('id'));
	}
}

function CalendarCtrl($scope, $location) {
	$scope.today = new Date();
	$scope.current = $scope.today;
	// Init
	$scope.month = generate($scope.current.getMonth());
	//$scope.month = generate(10);

	$scope.click = function(e) {
		var elem = angular.element(e.srcElement);

		if (elem.prop('id') == "") {
			$location.path('/calendar');
		} else {
			$location.path('/calendar/' + $scope.current.getFullYear() + '/' + ($scope.current.getMonth() + 1) + '/' + elem.prop('id'));
		}
	}

	function generate(m) {
		var today = $scope.current;

		if (today.getDate() > daysInMonth(m)) {
			today.setFullYear(today.getFullYear(), m, 1);
		}
		
		// var today = new Date();

		var month = [];

		var first = new Date(today.getFullYear(), today.getMonth(), 1);

		var days = daysInMonth(today.getMonth());

		var last = new Date(today.getFullYear(), today.getMonth(), days);

		for (var i = 1; i < days; i += 7) {
			if (i === 1) {
				switch(first.getDay()) {
					case 1:
						month.push({
							"Monday": (i < days) ? i : "",
							"Tuesday": (i + 1 < days) ? i + 1 : "",
							"Wednesday": (i + 2 < days) ? i + 2: "",
							"Thursday": (i + 3 < days) ? i + 3 : "",
							"Friday": (i + 4 < days) ? i + 4: "",
							"Saturday": (i + 5 < days) ? i + 5: "",
							"Sunday": ""
						});
						i -= 1;
						break;
					case 2:
						month.push({
							"Tuesday": (i < days) ? i : "",
							"Wednesday": (i + 1 < days) ? i + 1 : "",
							"Thursday": (i + 2 < days) ? i + 2: "",
							"Friday": (i + 3 < days) ? i + 3 : "",
							"Saturday": (i + 4 < days) ? i + 4: "",
							"Sunday": "",
							"Monday": ""
						});
						i -= 2;
						break;
					case 3:
						month.push({
							"Wednesday": (i < days) ? i : "",
							"Thursday": (i + 1 < days) ? i + 1 : "",
							"Friday": (i + 2 < days) ? i + 2: "",
							"Saturday": (i + 3 < days) ? i + 3 : "",
							"Sunday": "",
							"Monday": "",
							"Tuesday": ""
						});
						i -= 3;
						break;
					case 4:
						month.push({
							"Thursday": (i < days) ? i : "",
							"Friday": (i + 1 < days) ? i + 1 : "",
							"Saturday": (i + 2 < days) ? i + 2: "",
							"Sunday": "",
							"Monday": "",
							"Tuesday": "",
							"Thursday": ""
						});
						i -= 4;
						break;
					case 5:
						month.push({
							"Friday": (i < days) ? i : "",
							"Saturday": (i + 1 < days) ? i + 1 : "",
							"Sunday": "",
							"Monday": "",
							"Tuesday": "",
							"Wednesday": "",
							"Thursday": ""
						});
						i -= 5;
						break;
					case 6:
						month.push({
							"Saturday": (i < days) ? i : "",
							"Sunday": "",
							"Monday": "",
							"Tuesday": "",
							"Wednesday": "",
							"Thursday": "",
							"Friday": ""
						});
						i -= 6;
						break;
					default:
						month.push({
							"Sunday": (i < days) ? i : "",
							"Monday": (i + 1 < days) ? i + 1 : "",
							"Tuesday": (i + 2 < days) ? i + 2: "",
							"Wednesday": (i + 3 < days) ? i + 3 : "",
							"Thursday": (i + 4 < days) ? i + 4: "",
							"Friday": (i + 5 < days) ? i + 5: "",
							"Saturday": (i + 6 < days) ? i + 6 : ""
						});
				}
			} else {
				month.push({
					"Sunday": (i <= days) ? i : "",
					"Monday": (i + 1 <= days) ? i + 1 : "",
					"Tuesday": (i + 2 <= days) ? i + 2: "",
					"Wednesday": (i + 3 <= days) ? i + 3 : "",
					"Thursday": (i + 4 <= days) ? i + 4: "",
					"Friday": (i + 5 <= days) ? i + 5: "",
					"Saturday": (i + 6 <= days) ? i + 6 : ""
				});
			}
		}

		return month;
	}

	function daysInMonth(month) {
		var today = $scope.today;
		var days;

		switch(month + 1) {
			case 4:
			case 6:
			case 9:
			case 11:
				days = 30;
				break;
			case 2:
				days = (today.getFullYear() % 4 === 0) ? 29 : 28;
				break;
			default:
				days = 31;
		}

		return days;
	}
}

function CalendarDetailCtrl($scope, $routeParams) {
	$scope.current = new Date($routeParams.Year, $routeParams.Month - 1, $routeParams.Day);
}

function CourseListCtrl($scope, $http, $location) {
	$http.get('./temp-data/courses.json').success(function(data) {
		var courses = [];

		angular.forEach(data, function(value, key) {
			courses.push(value);
		});

		$scope.courses = courses;
	});

	$scope.click = function(e) {
		var elem = angular.element(e.srcElement.parentNode);
		$location.path('/courses/' + elem.prop('id'));
	}
}

function CourseDetailCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		$scope.Course = data[$routeParams.ID.condense()];
	});
}

function FriendListCtrl($scope, $http, $location) {
	$http.get('./temp-data/friends.json').success(function(data) {
		var friends = [];

		angular.forEach(data, function(value, key) {
			friends.push(value);
		});

		$scope.friends = friends;
	});

	$scope.click = function(e) {
		var elem = angular.element(e.srcElement.parentNode);
		$location.path('/friends/' + elem.prop('id'));
	}
}

function FriendProfileCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		$scope.Friend = data[$routeParams.Username];
	});
}