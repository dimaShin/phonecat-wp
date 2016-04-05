'use strict';

export class PhonecatService {
  constructor($resource) {
    return $resource('data/phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: { phoneId: 'phones' },
        isArray: true}
    });
  }
}
