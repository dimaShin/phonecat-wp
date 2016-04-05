'use strict';

class sidebarController {
  constructor() {
    this.orderProp = 'age';
    this.sortList = {
      'Alphabetical': 'name',
      'Newest': 'age'
    };
  }
}

export class SidebarDirective {
  constructor() {
    return {
      restrict: 'E',
      templateUrl: '../app/sidebar/sidebar.html',
      controller: sidebarController,
      controllerAs: 'sidebarCtrl'
    };
  }
}
