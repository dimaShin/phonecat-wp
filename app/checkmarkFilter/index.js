'use strict';

export default app => {
  app.module('checkmarkFilter', []).filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
};
