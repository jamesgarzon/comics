(function() {
'use strict';

  angular
    .module('comicsApp')
    .factory('Auth', authService);
    authService.$inject = ['$window','$http'];

    function authService($window, $http) {
      return {
        login:  login,
        logout: logout
      };

      function login(user) {

      return $http.post('http://jsonplaceholder.typicode.com/posts', user)
        .then(response=>{
            return response.data;
        })
        .catch((err) => {
          return err;
        });
      }

      function logout() {
        $window.localStorage.removeItem('isLogged');
      }
    }
})();
