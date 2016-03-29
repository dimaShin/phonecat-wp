'use strict';

class sidebarController {

  constructor() {
    this.orderProp = 'age';
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
