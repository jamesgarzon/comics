(function(){
  'use strict';

  angular
  .module('comicsApp')
  .config(function ($stateProvider){
    $stateProvider
    .state('employee', {
      url: '/employee',
      template: '<employee></employee>'
    });
  });

})();
