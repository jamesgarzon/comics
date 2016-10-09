(function() {
  'use strict';

  angular.module('comicsApp')
    .directive('navbar', () => ({
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarController',
      controllerAs: 'nav'
    }));

})();
