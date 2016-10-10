(function(){
  'use strict';

  // Controlador de la vista de empleados
  class EmployeeComponent {
    constructor($window, Employee) {
      this.Employee = Employee;
      this.$window = $window;
    }

    // llama las funciones listadas al cargar la vista
    $onInit(){
      this.list();
    }


    // Llama el servicio de listar empleados para traerlos a la vista
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

    // Crea un nuevo usuario guardandolo en el localstorage
    createEmployee(newEmployee){
      this.Employee.create(newEmployee)
      .then(employee=>{
        this.addEmployeeLocalStore(newEmployee);
        Materialize.toast('Se ha creado el empleado correctamente', 5000);
        $('#newEmployeeModal').closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
    }

    // Agrega un empleado al localStorage
    addEmployeeLocalStore(newEmployee){
      this.employees.push({
          username: newEmployee.username,
          password: newEmployee.password,
          name: newEmployee.name,
          lastname: newEmployee.lastname,
          phone: newEmployee.phone,
          address: newEmployee.address,
          email: newEmployee.email
        });
      this.$window.localStorage.employees = String(JSON.stringify(this.employees));
    }

  }

  angular.module('comicsApp')
  .component('employee', {
    templateUrl: 'app/employee/employee.html',
    controller: EmployeeComponent,
    controllerAs: 'vm'
  });

})();
