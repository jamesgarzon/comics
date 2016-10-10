(function(){
  'use strict';

  angular
  .module('comicsApp')
  .config(function ($stateProvider){
    $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
      authenticate: true
    });
  });

})();
