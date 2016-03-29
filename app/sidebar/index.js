'use strict';

import 'angular';

angular.module('sidebarDirective', []).directive('sidebar', () => {
    return {
      restrict: 'E',
      templateUrl: '../app/sidebar/sidebar.html',
      controller: ['$scope', function($scope) {
        $scope.orderProp = 'age';
      }]
    };
  });
