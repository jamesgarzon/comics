(function(){
  'use strict';

  class LoginComponent {
    constructor(Auth) {
      this.Auth = Auth;
    }

    // $onInit(){
    //
    // }


    login(user){
      this.Auth.login(user);
    }


  }

  angular.module('comicsApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
