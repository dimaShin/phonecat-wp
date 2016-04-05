'use strict';

export class CheckmarkFilter {
  constructor() {
    return (input) => input ? '\u2713' : '\u2718';
  }
}
