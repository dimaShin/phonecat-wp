'use strict';

export default phonecat => {
  phonecat.directive('phonelist', function() {
    return {
      restrict: 'E',
      templateUrl: '../app/phonelist/phone-list.html',
      controller: ['$scope', 'Phone', function($scope, Phone) {
          $scope.phones = Phone.query();
          $scope.orderProp = 'age';
      }],
    };
  });
};
