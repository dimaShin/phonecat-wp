'use strict';

import 'angular';

angular.module('checkmarkFilter', []).filter('checkmark', () => {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
