'use strict';

// angular.module('cardsApp', [])
// 	.controller('TestCtrl', ['$scope', function($scope) {
// 	  $scope.customer = {
// 	    name: 'Naomi',
// 	    address: '1600 Amphitheatre'
// 	  };
// 	}])
// 	.directive('myCustomer', function() {
// 	  return {
// 	    template: 'Name: {{customer.name}} Address: {{customer.address}}'
// 	  };
// 	});
// 	


/**
 * @ngdoc function
 * @name cardsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .directive('myCustomer', function() {
	  return {
	    template: 'Name: {{customer.name}} Address: {{customer.address}}'
	  };
});
