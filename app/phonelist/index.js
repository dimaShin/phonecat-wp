'use strict';

class phoneListController {

  static $inject = ['Phone'];

  constructor(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

export class PhonelistDirective {
  constructor() {
    return {
      restrict: 'E',
      templateUrl: '../app/phonelist/phone-list.html',
      controller: phoneListController,
      controllerAs: 'phoneListCtrl'
    };
  }
}
