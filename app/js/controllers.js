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
	function generate() {
		var today = new Date();

		var month = [];

		var first = new Date(today.getFullYear(), today.getMonth(), 1);
		//var last = new Date();
		//last.setFullYear(today.getFullYear(), today.getMonth() + 1, 0);
		//console.log('last', last.getDay());
		console.log(first.getDay() + 1);

		var days = daysInMonth(today.getMonth());
		console.log('days', days);

		var last = new Date(today.getFullYear(), today.getMonth(), days);

		for (var i = 1; i < days; i += 7) {
			// console.log("i", i);
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

		console.log(month);
		return month;
	}

	$scope.month = generate();

	function daysInMonth(month) {
		var today = new Date();
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

		console.log(days);
		return days;
	}

	// $scope.month = [
	// 	{
	// 		"Sunday": "", 
	// 		"Monday": "",
	// 		"Tuesday": "1",
	// 		"Wednesday": "2",
	// 		"Thursday": "3",
	// 		"Friday": "4",
	// 		"Saturday": "6"
	// 	},
	// 	{
	// 		"Sunday": "7", 
	// 		"Monday": "8",
	// 		"Tuesday": "9",
	// 		"Wednesday": "10",
	// 		"Thursday": "11",
	// 		"Friday": "12",
	// 		"Saturday": "13"
	// 	},
	// 	{
	// 		"Sunday": "14", 
	// 		"Monday": "15",
	// 		"Tuesday": "16",
	// 		"Wednesday": "17",
	// 		"Thursday": "18",
	// 		"Friday": "19",
	// 		"Saturday": "20"
	// 	},
	// 	{
	// 		"Sunday": "21", 
	// 		"Monday": "22",
	// 		"Tuesday": "23",
	// 		"Wednesday": "24",
	// 		"Thursday": "25",
	// 		"Friday": "26",
	// 		"Saturday": "27"
	// 	},
	// 	{
	// 		"Sunday": "28", 
	// 		"Monday": "29",
	// 		"Tuesday": "30",
	// 		"Wednesday": "31",
	// 		"Thursday": "",
	// 		"Friday": "",
	// 		"Saturday": ""
	// 	}
	// ];
}

function CourseListCtrl($scope, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		var courses = [];

		angular.forEach(data, function(value, key) {
			courses.push(value);
		});

		$scope.courses = courses;
	});
}

function CourseDetailCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		$scope.Course = data[$routeParams.ID.condense()];
	});
}

function FriendListCtrl($scope, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		var friends = [];

		angular.forEach(data, function(value, key) {
			friends.push(value);
		});

		$scope.friends = friends;
	});
}

function FriendProfileCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/friends.json').success(function(data) {
		$scope.Friend = data[$routeParams.Username];
	});
}