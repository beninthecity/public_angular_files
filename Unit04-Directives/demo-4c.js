'use strict';

var app = angular.module('MyApp', []);

app.controller('MyCtrl', ['$scope', function($scope) {
	$scope.name = 'Sanborn';
}]);

app.directive('suchDirective', [function () {
	return {
		restrict: 'A',
		// Runs once per directive instance
		compile: function (tElement, attributes) { //No access to scope here
			//tElement = template element, meaning uncompiled DOM element
			console.log('This is the compile function.')
			// console.log(tElement);
			// console.log(attributes);

			// We can manipulate that template element here
			var newElement = angular.element('<h1> THIS WAS NOT IN THE TEMPLATE </h1>');
			tElement.append(newElement);

		}
	};
}]);

