(function(){
  'use strict';

  class LoginComponent {
    constructor(Auth, $window, $state) {
      this.Auth = Auth;
      this.$window = $window;
      this.$state = $state;
    }

    // $onInit(){
    //
    // }

    // login(user){
    //   this.Auth.login(user)
    //   .then((user) => {
    //     this.user = user;
    //     this.$window.localStorage.isLogged = 'true';
    //     this.$window.localStorage.user = String(user);
    //
    //     this.$state.go('comics');
    //   });
    // }
    login(user){
      this.Auth.login(user);
      this.$state.go('comics');

      // .then((user) => {
      //   this.user = user;
      //   this.$window.localStorage.isLogged = 'true';
      //   this.$window.localStorage.user = String(user);
      //
      // });
    }


  }

  angular.module('comicsApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
