'use strict';

export class CheckmarkFilter {

  constructor() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  }
}
