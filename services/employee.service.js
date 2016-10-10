(function() {
  'use strict';

  angular
  .module('comicsApp')
  .factory('Employee', employeeService);
  employeeService.$inject = ['$http','$window'];

  function employeeService($http, $window) {
    return {
      list:  list,
      create: create,
      isEmpty: isEmpty
    };

    function list() {
      return $http.get('json/employees.json')
      .then(response=>{
        return response.data;
      })
      .catch((err) => {
        return err;
      });
    }

    function create(newEmployee) {
      return $http.post('http://jsonplaceholder.typicode.com/posts', newEmployee)
      .then(response=>{
        return response.data;
      })
      .catch((err) => {
        return err;
      });
    }

    function isEmpty() {
      if (!$window.localStorage.employees) {
        return true;
      }else {
        return false;
      }
    }

  }
})();
