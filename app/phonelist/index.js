'use strict';

export class PhonelistDirective {

  constructor() {
    return {
      restrict: 'E',
      templateUrl: '../app/phonelist/phone-list.html',
      controller: ['$scope', 'Phone', function($scope, Phone) {
          $scope.phones = Phone.query();
          $scope.orderProp = 'age';
      }],
    };
  }
}
