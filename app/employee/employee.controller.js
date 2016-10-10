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
      if (this.checkPassword(newEmployee.password)) {

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

    checkPassword(password){
      let check = true;
      if (!this.hasMayus(password)) {
        Materialize.toast('La contraseña debe tener minimo una mayúscula', 5000);
        check = false;
      }
      if (!this.hasTwoNumbers(password)) {
        Materialize.toast('La contraseña debe tener minimo dos (2) números', 5000);
        check = false;
      }
      if (!this.hasSpecialChars(password)) {
        Materialize.toast('La contraseña debe tener minimo un caracter especial', 5000);
        check = false;
      }
      return check;
    }

    hasMayus(password){
      let mayus = new RegExp('[A-Z]');
      return mayus.test(password);
    }

    hasTwoNumbers(password){
      let number = new RegExp('[0-9]{2}');
      return number.test(password);
    }

    hasSpecialChars(password){
      let specialChar = new RegExp('\\W');
      return specialChar.test(password);
    }

  }

  angular.module('comicsApp')
  .component('employees', {
    templateUrl: 'app/employee/employee.html',
    controller: EmployeeComponent,
    controllerAs: 'vm'
  });

})();
