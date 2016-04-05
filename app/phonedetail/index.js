'use strict';

class phoneListController {

  static $inject = ['Phone', '$routeParams'];

  constructor(Phone, $routeParams) {
    this.phone = Phone.get(
      { phoneId: $routeParams.phoneId },
      phone => { this.mainImageUrl = phone.images[0]; }
    );
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}

export class PhonedetailDirective {
  constructor() {
    return {
      restrict: 'E',
      templateUrl: '../app/phonedetail/phone-detail.html',
      controller: phoneListController,
      controllerAs: 'phoneListCtrl'
    };
  }
}
