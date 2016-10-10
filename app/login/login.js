(function(){
  'use strict';

  angular
  .module('comicsApp')
  .config(function ($stateProvider){
    $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>',
      authenticate: false
    });
  });

})();
