'use strict';

var app = angular.module('MyApp', []);

app.factory('userFactory', [function () {

	var userFactory = {};

	userFactory.user = {
		firstName: 'Misko',
		lastName: 'Hevery'
	}

	userFactory.logUser = function () {
		console.log(userFactory.user);
	}

	return userFactory;
}]);

app.controller('MyCtrl', ['$scope', 'userFactory', function ($scope, userFactory) {
	$scope.model = {
		user : userFactory.user
	}

	$scope.logUser = function () {
		userFactory.logUser();
	}
}]);

app.controller('OtherCtrl', ['$scope', 'userFactory', function ($scope, userFactory) {
	$scope.model = {
		user : userFactory.user
	}

	$scope.logUser = function () {
		userFactory.logUser();
	}
}]);
