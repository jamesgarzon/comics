(function() {
  'use strict';
  angular

  .module('comicsApp',['ui.materialize','ui.router'])

  .config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  })
  .run(function ($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      var isLogin = toState.name === 'login';

      // Si ya se encuentra en el inicio no redirecciona
      if(isLogin){
        return;
      }

      // Si el usuario no esta autenticado se redirecciona al login
      if (toState.authenticate && !Auth.isLoggedIn()){
        $state.transitionTo('login');
        event.preventDefault();
      }
    });
  });



})();
