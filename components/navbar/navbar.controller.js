(function() {
  'use strict';

  class NavbarController {
    constructor(Auth, $window) {
      this.Auth = Auth;
      this.isLoggedIn = this.Auth.isLoggedIn;
      this.getUsername = this.Auth.getUsername;
      console.log(this.getUsername());
    }

    logout(){
      this.Auth.logout();
      // this.isLoggedIn = false;
    }

  }

  angular.module('comicsApp')
    .controller('NavbarController', NavbarController);

})();
