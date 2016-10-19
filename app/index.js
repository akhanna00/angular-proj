// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Create Angular Controller
myApp.controller("mainController", ["$scope", function($scope) {
	$scope.message = "Hello World";
}]); 

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

		// route for home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		// route for about pahe
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		// route for contact
		.when('/contact', {
			templateUrl : "pages/contact.html",
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