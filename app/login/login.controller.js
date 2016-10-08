(function(){
  'use strict';

  class OrdersComponent {
    constructor() {

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
