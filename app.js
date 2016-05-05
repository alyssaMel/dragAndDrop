/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */


'use strict';

// Declare app level module which depends on other modules
angular.module('demoApp', [
    'ngRoute',
    'as.sortable',
    'ui.bootstrap'
  ]).
  controller('DemoController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      var active = false;
      if ($location.$$path.lastIndexOf(viewLocation, 0) != -1) {
        active = true;
      }
      return active;
    };
	
	
		$scope.dragControlListeners = {
    accept: function (sourceItemHandleScope, destSortableScope) {return boolean}//override to determine drag is allowed or not. default is true.
    itemMoved: function (event) {//Do what you want},
    orderChanged: function(event) {//Do what you want},
    containment: '#board'//optional param.
    clone: true //optional param for clone feature.
    allowDuplicates: false //optional param allows duplicates to be dropped.
  }}};

	$scope.dragControlListeners1 = {
			containment: '#board'//optional param.
			allowDuplicates: true //optional param allows duplicates to be dropped.
	};

	

  }]);

