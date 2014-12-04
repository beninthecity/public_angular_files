/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.directive('expandable', [function () {

	var isVisible = true;

	return {

		link : function (scope, element, attrs) {
			// Log stuff just to see what the values are
			// console.log('Inside link!');
			// console.log('Scope', scope);
			// console.log('Element', element);
			// console.log('Attrs', attrs);

			// console.log("element.find('div')[0]", element.find('div')[0]);

			var header = angular.element(element.find('div')[0]);
			console.log('header', header);

			var content = angular.element(element.find('div')[1]);
			console.log('content', content);

			header.bind('click', function () {
				console.log('click!');

				isVisible = !isVisible;
				content.css('display', isVisible ? 'block' : 'none');
			});
		}
	};
}]);
