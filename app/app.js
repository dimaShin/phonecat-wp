'use strict';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/animation.css';

import 'angular';
import 'angular-route';
import './checkmarkFilter';
import './sidebar';
import './phonelist';
import './phonedetail';
import './service';
import './animation';

angular.module('phonecat',
  [
    'ngRoute',
    'checkmarkFilter',
    'phonecatService',
    'phonecatAnimation',
    'sidebarDirective',
    'phonelistDirective',
    'phonedetailDirective'
  ]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
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
]);
