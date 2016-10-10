(function() {
  'use strict';

  class NavbarController {
    constructor(Auth, $window) {
      this.Auth = Auth;
      this.isLoggedIn = this.Auth.isLoggedIn;
      this.getUsername = this.Auth.getUsername;
    }

    logout(){
      this.Auth.logout();
    }

  }

  angular.module('comicsApp')
  .controller('NavbarController', NavbarController);

})();
