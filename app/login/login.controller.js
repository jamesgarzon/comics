(function(){
  'use strict';

  class OrdersComponent {
    constructor($window) {
      $window.localStorage['ejemplo'] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    }

    $onInit(){
      // this.listClients();
      // this.listProducts();
      // this.listOrders();
    }

    listOrders(){
      // this.Order.list()
      // .then(orders=>{
      //   this.orders=orders;
      // })
    }

  }

  angular.module('comicsApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: OrdersComponent,
    controllerAs: 'vm'
  });

})();
