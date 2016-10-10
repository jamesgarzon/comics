(function(){
  'use strict';

  angular
  .module('comicsApp')
  .config(function ($stateProvider){
    $stateProvider
    .state('employees', {
      url: '/employees',
      template: '<employees></employees>',
      authenticate: true
    });
  });

})();
