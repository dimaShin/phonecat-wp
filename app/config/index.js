'use strict';

export class Config {
  constructor($routeProvider) {
    return $routeProvider.
      when('/phones', {
        template: '<sidebar></sidebar><phonelist></phonelist>'
      }).
      when('/phones/:phoneId', {
        template: '<phonedetail></phonedetail>',
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }
}
