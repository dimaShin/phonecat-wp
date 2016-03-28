'use strict';

module.exports = function(phonecat) {
  phonecat.directive('sidebar', function() {
    return {
      restrict: 'E',
      templateUrl: '../app/sidebar/sidebar.html',
      controller: ['$scope', function($scope) {
        $scope.orderProp = 'age';
      }]
    };
  });
};
