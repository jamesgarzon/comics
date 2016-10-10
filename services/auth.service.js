(function() {
'use strict';

  angular
    .module('comicsApp')
    .factory('Auth', authService);
    authService.$inject = ['$window','$http','$state'];

    function authService($window, $http, $state) {
      return {
        login:  login,
        logout: logout,
        isLoggedIn: isLoggedIn
      };

      function login(user) {
          $window.localStorage.isLoggedIn = 'true';
          $window.localStorage.user = String(user);
      }

      function logout() {
        $window.localStorage.removeItem('isLoggedIn');
        $state.go('login');
      }

      function isLoggedIn() {
        return ($window.localStorage.isLoggedIn === 'true');
      }
    }
})();
