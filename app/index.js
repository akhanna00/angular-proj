// Create Angular Module
var myApp = angular.module("myApp", []);

// Create Angular Controller
myApp.controller("mainController", ["$scope", function($scope) {
	$scope.message = "Hello World";
}]); 