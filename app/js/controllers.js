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

		for (var i = 1; i < daysInMonth(today.getMonth()); i++) {
			
		}
	}

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

		return days
	}

	$scope.month = [
		{
			"Sunday": "", 
			"Monday": "",
			"Tuesday": "1",
			"Wednesday": "2",
			"Thursday": "3",
			"Friday": "4",
			"Saturday": "6"
		},
		{
			"Sunday": "7", 
			"Monday": "8",
			"Tuesday": "9",
			"Wednesday": "10",
			"Thursday": "11",
			"Friday": "12",
			"Saturday": "13"
		},
		{
			"Sunday": "14", 
			"Monday": "15",
			"Tuesday": "16",
			"Wednesday": "17",
			"Thursday": "18",
			"Friday": "19",
			"Saturday": "20"
		},
		{
			"Sunday": "21", 
			"Monday": "22",
			"Tuesday": "23",
			"Wednesday": "24",
			"Thursday": "25",
			"Friday": "26",
			"Saturday": "27"
		},
		{
			"Sunday": "28", 
			"Monday": "29",
			"Tuesday": "30",
			"Wednesday": "31",
			"Thursday": "",
			"Friday": "",
			"Saturday": ""
		}
	];
}

function CourseListCtrl($scope, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		$scope.courses = data;
	});
}

function CourseDetailCtrl($scope, $routeParams, $http) {
	$http.get('./temp-data/courses.json').success(function(data) {
		$scope.Course = data[$routeParams.ID.condense()];
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
	});
}