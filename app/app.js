'use strict';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/animation.css';

import ng from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';
import {PhonecatService} from './service';
import {Config} from './config';
import {PhonecatAnimation} from './animation';
import {CheckmarkFilter} from './checkmarkFilter';
import {SidebarDirective} from './sidebar';
import {PhonelistDirective} from './phonelist';
import {PhonedetailDirective} from './phonedetail';

ng.module('phonecat', [ngRoute, ngResource, ngAnimate])
  .service('Phone', ['$resource', PhonecatService])
  .config(['$routeProvider', $routeProvider => new Config($routeProvider)])
  .animation('.phone', () => new PhonecatAnimation())
  .filter('checkmark', () => new CheckmarkFilter())
  .directive('phonelist', () => new PhonelistDirective())
  .directive('phonedetail', () => new PhonedetailDirective())
  .directive('sidebar', () => new SidebarDirective());
