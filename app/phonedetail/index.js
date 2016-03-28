'use strict';

module.exports = function(phonecat) {
  phonecat.directive('phonedetail', function() {
    return {
      restrict: 'E',
      templateUrl: '../app/phonedetail/phone-detail.html',
      controller: ['$scope', 'Phone', '$routeParams', function($scope, Phone, $routeParams) {
          $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        };
      }],
    };
  });
};
