(function() {
    'use strict';
    angular

        .module('comicsApp',['ui.materialize','ui.router'])

        .config(function ($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/');
          $stateProvider
            .state('login', {
              url: '/login',
              template: '<login></login>'
            })
            .state('home', {
              url: '/',
              template: '<home></home>'
            })
            .state('comics', {
              url: '/comics',
              template: '<comics></comics>'
            });

        });

})();
