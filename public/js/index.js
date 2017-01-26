(function() {
angular.module('StephenDBaldwinResume', ['ngRoute'])
angular.module('StephenDBaldwinResume')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
}]);
$('.modal').modal('show')	
angular.module('StephenDBaldwinResume')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/resume.html',
			controller : 'mainController'
		})
		.when('/resume', {
			templateUrl: '/html/resume.html',
			controller : 'mainController'
		})
		.when('/bio', {
			templateUrl: '/html/bio.html',
			controller : 'mainController'
		})
		.when('/carousel-example-generic', {
			templateUrl: '/html/bio.html',
			controller : 'mainController'
		})
		$locationProvider
  		.html5Mode(false)
  		.hashPrefix('');		
	}]);
}());