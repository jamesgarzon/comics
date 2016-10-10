(function() {
  'use strict';

  class NavbarController {
    constructor(Auth, $window) {
      this.Auth = Auth;
    }

    logout(){
      this.Auth.logout();
    }

  }

  angular.module('comicsApp')
    .controller('NavbarController', NavbarController);

})();
