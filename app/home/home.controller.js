(function(){
  'use strict';

  class LoginComponent {
    constructor() {

    }
  }

  angular.module('comicsApp')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
