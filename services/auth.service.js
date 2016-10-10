(function() {
  'use strict';

  angular
  .module('comicsApp')
  .factory('Auth', authService);
  authService.$inject = ['$window','$http','$state','Employee'];

  function authService($window, $http, $state, Employee) {
    return {
      login:  login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      getUsername: getUsername
    };

    function login(user) {
      var result = false;
      if (Employee.isEmpty()) {
        Employee.list()
        .then(employees=>{
          employees.forEach(employee=>{
            if (user.username === employee.username && user.password === employee.password) {
              $window.localStorage.isLoggedIn = 'true';

              $window.localStorage.user = String(JSON.stringify(user));
              $state.go('home');
              Materialize.toast('Bienvenido(a) '+ user.username, 4000);
              result = true;
            }
          });
          if (!result) {
            Materialize.toast('El usuario y contraseña no son valido', 4000);
          }
        });
      }else {
        let localEmployees = JSON.parse($window.localStorage.employees);
        localEmployees.forEach(employee=>{
          if (user.username === employee.username && user.password === employee.password) {
            $window.localStorage.isLoggedIn = 'true';
            $window.localStorage.user = String(JSON.stringify(user));
            $state.go('home');
            Materialize.toast('Bienvenido(a) '+ user.username, 4000);

            result = true;
          }
        });
        if (!result) {
          Materialize.toast('El usuario y contraseña no son valido', 4000);
        }
      }

    }

    function logout() {
      $window.localStorage.removeItem('isLoggedIn');
      $state.go('login');
    }

    function isLoggedIn() {
      return ($window.localStorage.isLoggedIn === 'true');
    }

    function getUsername() {
      if ($window.localStorage.user) {
        let user = JSON.parse($window.localStorage.user);
        return user.username;
      }else {
        return '';
      }
    }
  }
})();
