'use strict';

import 'angular';
import 'angular-resource';

angular.module('phonecatService', ['ngResource']).factory('Phone', ['$resource',
  function($resource){
    return $resource('data/phones/:phoneId.json', {}, {
      query: {
        method:'GET',
        params: { phoneId:'phones' },
        isArray:true}
    });
  }]);
