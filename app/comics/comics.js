(function(){
  'use strict';

  angular
  .module('comicsApp')
  .config(function ($stateProvider){
    $stateProvider
    .state('comics', {
      url: '/comics',
      template: '<comics></comics>'
    });
  });

})();
