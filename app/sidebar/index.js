'use strict';

export class SidebarDirective {

  constructor() {
    return {
      restrict: 'E',
      templateUrl: '../app/sidebar/sidebar.html',
      controller: ['$scope', function($scope) {
        $scope.orderProp = 'age';
      }]
    };
  }
}
