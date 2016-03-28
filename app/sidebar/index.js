'use strict';

export default phonecat => {
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
