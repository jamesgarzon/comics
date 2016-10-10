(function(){
  'use strict';

  // Controlador de la vista de comics
  class ComicsComponent {
    constructor($window, $state, Comic) {
      this.Comic = Comic;
      this.$window = $window;
      this.$state = $state;
    }

    // llama las funciones listadas al cargar la vista
    $onInit(){
      this.list();
    }


    // Llama el servicio de listar comics para traerlos a la vista
    list(){
      this.Comic.list()
      .then((comics) => {
        if (!this.$window.localStorage.comics) {
          this.comics = comics;
          this.$window.localStorage.comics = String(JSON.stringify(comics));
        }else {
          this.comics = JSON.parse(this.$window.localStorage.comics);
        }
      });
    }


    // Selecciona un comic para mostrar en el modal
    selectComic(comic){
      this.selectedComic = angular.copy(comic);
    }


    // Función para filtrar los comics por el titulo usando expresiones regulares
    filter(query){
      if (query) {
        query = query.toLowerCase();
      }
      let regExp = new RegExp(query);
        return ( item ) => {
          return regExp.test(item.name.toLowerCase());
      };
    }

  }

  angular.module('comicsApp')
  .component('comics', {
    templateUrl: 'app/comics/comics.html',
    controller: ComicsComponent,
    controllerAs: 'vm'
  });

})();
