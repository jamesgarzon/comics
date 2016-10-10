(function() {
  'use strict';

  angular
  .module('comicsApp')
  .factory('Comic', comicService);
  comicService.$inject = ['$window','$http'];

  function comicService($window, $http) {
    return {
      list:  list
      // editComic: logout
    };

    function list() {
      return $http.get('json/comics.json')
      .then(response=>{
        return response.data;
      })
      .catch((err) => {
        return err;
      });
    }

    // function logout() {
    //   $window.localStorage.removeItem('isLogged');
    // }
  }
})();
