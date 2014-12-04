'use strict';

var app = angular.module('MyApp', []);

app.directive('collapsed', [function () {

	return {

		link : function (scope, element, attrs) {

			var isCollapsed = false,
					// header = angular.element(_.findWhere(element.children(), {className: 'header'})),
					header = angular.element(element[0].getElementsByClassName('header')[0]),
					content = angular.element(_.findWhere(element.children(), {className: 'content'}));

			console.log(element);
			console.log(header);

			console.log('----------> scope ID: ' + scope.$id + ':');
			console.log(scope);

			header.bind('click', function () {
				content.css('display', isCollapsed ? 'block' : 'none');
				isCollapsed = !isCollapsed;
				console.log('After CLICK: isCollapsed: ', isCollapsed);
			});
		}
	};
}]);
