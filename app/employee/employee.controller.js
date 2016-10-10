(function(){
  'use strict';

  // Controlador de la vista de comics
  class EmployeeComponent {
    constructor($window, $state, Employee) {
      this.Employee = Employee;
      this.$window = $window;
      this.$state = $state;

    }

    // llama las funciones listadas al cargar la vista
    $onInit(){
      this.list();
    }


    // Llama el servicio de listar comics para traerlos a la vista
    list(){
      this.Employee.list()
      .then((employees) => {
        if (!this.$window.localStorage.employees) {
          this.employees = employees;
          this.$window.localStorage.employees = String(JSON.stringify(employees));
        }else {
          this.employees = JSON.parse(this.$window.localStorage.employees);
        }
      });
    }

  }

  angular.module('comicsApp')
  .component('employee', {
    templateUrl: 'app/employee/employee.html',
    controller: EmployeeComponent,
    controllerAs: 'vm'
  });

})();
