(function() {
  'use strict';

  angular
  .module('comicsApp')
  .factory('Employee', employeeService);
  employeeService.$inject = ['$http'];

  function employeeService($http) {
    return {
      list:  list,
      create: create
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

  }
})();
