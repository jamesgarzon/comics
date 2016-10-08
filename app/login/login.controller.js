(function(){
  'use strict';

  class OrdersComponent {
    constructor(Auth, $window, $state) {
      this.Auth = Auth;
      this.$window = $window;
      this.$state = $state;
    }

    // $onInit(){
    //
    // }

    login(user){

      this.Auth.login(user)
      .then((user) => {
        this.user = user;
        this.$window.localStorage.isLogged = 'true';
        this.$window.localStorage.user = String(user);
        
        this.$state.go('comics');
      });
    }


  }

  angular.module('comicsApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: OrdersComponent,
    controllerAs: 'vm'
  });

})();
