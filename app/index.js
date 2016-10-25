// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

		// route for home page
		.when('/', {
			templateUrl : 'pages/home.min.html',
			controller : 'mainController'
		})

		// route for about page
		.when('/about', {
			templateUrl : 'pages/about.min.html',
			controller : 'aboutController'
		})

		// route for contact page
		.when('/contact', {
			templateUrl : "pages/contact.min.html",
			controller : "contactController"
		});
}]);

myApp.controller('mainController', ["$scope", function($scope) {
	$scope.message = "Main page";
}]);

myApp.controller('aboutController', ["$scope", function($scope) {
	$scope.message = "About me";
}]);

myApp.controller('contactController', ["$scope", function($scope) {
	$scope.message = "Contact Me";
}]);