'use strict';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/animation.css';

import app from 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-animate';
import checkmarkFilter from './checkmarkFilter';
import sidebar from './sidebar';
import phonelist from './phonelist';
import phonedetail from './phonedetail';
import service from './service';
import animation from './animation';

const phonecat = app.module('phonecat',
  [
    'ngRoute',
    'checkmarkFilter',
    'phonecatService',
    'phonecatAnimation'
  ]);
const phonecatService = app.module('phonecatService', ['ngResource']);
const phonecatAnimation = app.module('phonecatAnimation', ['ngAnimate']);

phonecat.config(['$routeProvider',
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

checkmarkFilter(app);
sidebar(phonecat);
phonelist(phonecat);
phonedetail(phonecat);
service(phonecatService);
animation(phonecatAnimation);
