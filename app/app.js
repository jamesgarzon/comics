(function() {
    'use strict';
    angular

        .module('comicsApp',['ui.materialize','ui.router'])

        .config(function ($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/');
          $stateProvider
            .state('home', {
              url: '/',
              template: '<home></home>'
            });
        });

})();
