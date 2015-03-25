var app = angular.module('shoppingCartApp', ['ngRoute','ui.bootstrap']);

app.controller('IncludeNavHeaderCtrl', function($scope, $http) {
    $scope.fileUrl = 'view/navHeader.html';
});
app.controller('IncludeFooterCtrl', function($scope) {
    $scope.fileUrl = 'view/footer.html';
});
app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : 'view/home.html',
		controller : "homePageCtrl"
	})
	.when('/aboutUs', {
		templateUrl: 'view/aboutUs.html'
	});
});
